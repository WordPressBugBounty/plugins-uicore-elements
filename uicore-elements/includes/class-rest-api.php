<?php

namespace UiCoreElements;

use \Elementor\Plugin;
use UiCoreElements\Helper;
use UiCoreElements\Utils\Contact_Form_Service;

/**
 * REST_API Handler
 */
class REST_API
{

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes()
    {
        register_rest_route('uielem/v1', '/load_more/', [
            'methods' => 'GET',
            'show_in_index' => true,
            'callback' => [$this, 'apg_load_more'],
            'permission_callback' => '__return_true',
            'args' => [
                'widget_id' => [
                    'required' => true,
                ],
                'widget_type' => [
                    'required' => true,
                ],
                'page' => [
                    'required' => false,
                    'default' => 1,
                ],
                'type' => [
                    'required' => false,
                    'default' => '',
                ],
                'term' => [
                    'required' => false,
                    'default' => '',
                ],
            ],
        ]);
        register_rest_route('uielem/v1', '/submit_actions/', [
            'methods' => 'POST',
            'callback' => [$this, 'process_submission'],
            'permission_callback' => '__return_true',
        ]);
        register_rest_route('uielem/v1', '/prepare_template', [
            'methods' => 'POST',
            'callback' => [$this, 'prepare_template'],
            'permission_callback' => [$this, 'check_for_permission'],
        ]);

        register_rest_route('uielem/v1', '/check_connection', [
            'methods' => 'GET',
            'callback' => [$this, 'check_connection'],
            'permission_callback' => [$this, 'check_for_permission'],
        ]);
    }

    public function check_for_permission()
    {
        return current_user_can('manage_options');
    }

    public function apg_load_more(\WP_REST_Request $request)
    {
        $current_query = false;

        // Identify the widget
        $widget_id   = $request->get_param('widget_id');
        $widget_type = $request->get_param('widget_type');
        $is_product  = strpos($widget_type, 'product') !== false;

        // Get widget settings
        $settings = get_transient('ui_elements_widgetdata_' . $widget_id);

        if (!is_array($settings)) {
            return new \WP_Error('invalid_widget', __('Widget data not found.', 'uicore-elements'), ['status' => 400]);
        }

        // Check if is an "Advanced Product.." widget to determine the proper control slug
        $slug = $is_product ? 'product-filter' : 'posts-filter';

        // Set extra settings from request params
        $tax = $slug . '_' . $request->get_param('type') . '_ids';
        $settings[$tax] = $request->get_param('term');
        $settings['__current_page'] = $request->get_param('page');
        $settings['__current_post_id'] = $request->get_param('current_post_id');

        // Use load more qty (new option) if available
        if (isset($settings['load_more_qty']) && isset($settings['load_more_qty']['size']) && !empty($settings['load_more_qty']['size'])) {
            $settings['item_limit'] = $settings['load_more_qty'];
        }

        // Build current query if requested
        if (isset($settings[$slug . '_post_type']) && $settings[$slug . '_post_type'] == 'current') {
            $raw_query = $request->get_param('current_query');
            $decoded_query = is_string($raw_query) ? json_decode(urldecode($raw_query), true) : [];
            $current_query = $this->sanitize_current_query(is_array($decoded_query) ? $decoded_query : []);
            $current_query['paged'] = absint($request->get_param('page')) ?: 1;
        }

        // Create the element data
        $widget = [
            'elType'     => 'widget',
            'widgetType' => $widget_type,
            'id'         => $widget_id,
        ];

        // Generate a new instance of the widget with those settings and return the markup
        //$widget = new AdvancedPostGrid($widget, $settings); todo: discover why this method don't work
        $widget = Plugin::instance()->elements_manager->create_element_instance($widget, $settings);
        $widget->set_settings($settings);

        $data = $widget->render_ajax($current_query);

        return [
            'markup' => $data['markup'],
            'total_pages' => $is_product ? $data['total_pages'] : $widget->get_query()->max_num_pages,
        ];
    }

    /**
     * Sanitize and whitelist client-supplied current_query args so only public archive query vars are allowed.
     *
     * @param array $query Raw decoded query array from request.
     * @return array Sanitized query args.
     */
    private function sanitize_current_query(array $query)
    {
        // Backward compatibility with legacy nested query structure
        if (!isset($query['post_type']) && isset($query['query']['post_type'])) {
            $query['post_type'] = $query['query']['post_type'];
        }

        $allowed_keys = [
            'post_type',
            'cat',
            'category_name',
            'tag',
            'tag_id',
            'author',
            'author_name',
            'year',
            'monthnum',
            'day',
            'w',
            'm',
            's',
            'taxonomy',
            'term',
            'orderby',
            'order',
        ];

        foreach (get_taxonomies(['public' => true], 'objects') as $tax_object) {
            if (!empty($tax_object->query_var) && is_string($tax_object->query_var)) {
                $allowed_keys[] = $tax_object->query_var;
            }
        }

        $sanitized = array_intersect_key($query, array_flip($allowed_keys));

        // Only allow a single, publicly viewable post type (never 'any' or private/internal post types)
        if (isset($sanitized['post_type'])) {
            if (!is_string($sanitized['post_type']) || !is_post_type_viewable($sanitized['post_type'])) {
                $sanitized['post_type'] = 'post';
            }
        }

        $sanitized['post_status'] = 'publish';

        return $sanitized;
    }

    public function process_submission(\WP_REST_Request $request)
    {

        // Get referer origin, form and widget data
        $form_data = $request->get_params();
        $files = $request->get_file_params();
        $settings = get_transient('ui_e_form_widget_settings_' . $form_data['widget_id']);

        // Request the contact form service and return the response
        $service = new Contact_Form_Service($form_data, $settings, $files);
        $response = $service->handle();
        return $response;
    }


    public function prepare_template(\WP_REST_Request $request)
    {
        $template = $request->get_param('data');
        $template = json_decode($template, true);
        $template = DesignCloud::import_content($template);
        return [
            'success' => true,
            'template' => $template,
        ];
    }

    public function check_connection()
    {
        $local_data = get_option('uicore_connect', [
            'url' => '',
            'token' => '',
        ]);
        return [
            'success' => true,
            'license' => [
                'key' => $local_data['token'],
                'url' => $local_data['url'],
            ],
        ];
    }
}
