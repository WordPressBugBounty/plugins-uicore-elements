"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.addEventListener("DOMContentLoaded",function(){var t=function(){_inherits(t,elementorModules.frontend.handlers.Base);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"getDefaultElements",value:function(){return{$form:this.$element.find(".ui-e-form"),$site_key:window.uicore_elements_recaptcha,$messages:this.$element.find(".ui-e-message")}}},{key:"toggleMessages",value:function(){this.elements.$messages.is(":visible")?this.elements.$messages.hide():this.elements.$messages.show()}},{key:"handleResponse",value:function(e){var t,n,r,o,a,s=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=(this.elements.$form.removeClass("submitting"),this.elements.$form.find(".ui-e-message"));s?i.empty().append('<span class="'.concat(e.status,'"> ').concat(e.message," </span>")):(s={status:e.status,message:e.data.message},t=e.data.redirect||!1,n=e.data.email||!1,r=e.data.submit||!1,o=e.data.mail&&e.data.mail.attachment||!1,a=e.data.mailchimp||!1,i.append('<span class="'.concat(s.status,'"> ').concat(s.message," </span> <br>")),t&&i.append('<span class="'.concat(t.status,'"> ').concat(t.message," </span> <br>")),n&&i.append('<span class="'.concat(n.status,'"> ').concat(n.message," </span> <br>")),a&&i.append('<span class="'.concat(a.status,'"> ').concat(a.message," </span> <br>")),r&&i.append('<span class="'.concat(r.status,'"> ').concat(r.message," </span> <br>")),o&&i.append('<span class="error"> '.concat(o.message," </span> <br>")),e.data.redirect&&"success"==e.data.redirect.status&&setTimeout(function(){window.location.href=e.data.redirect.url},e.data.redirect.delay))}},{key:"submitData",value:function(e){var t,n=this;if(this.validateRequiredFields())return t=(t=document.querySelector('link[rel="https://api.w.org/"]'))?t.getAttribute("href"):"/wp-json/",jQuery.ajax({url:t+"uielem/v1/submit_actions/",type:"POST",data:e,processData:!1,contentType:!1,beforeSend:function(){n.elements.$form.addClass("submitting"),n.elements.$form.find(".ui-e-message").empty()},success:function(e){n.handleResponse(e)},error:function(e){n.handleResponse(e)}}),!1}},{key:"prepareData",value:function(e){var t=this,n=new FormData(e[0]);n.append("widget_id",this.getID()),n.has("recaptcha")?grecaptcha.ready(function(){grecaptcha.render("ui-e-recaptcha-"+t.getID(),{sitekey:t.elements.$site_key,callback:function(e){n.append("grecaptcha_token",e),n.append("grecaptcha_version","v2"),t.submitData(n)}})}):n.has("recaptcha_v3")?grecaptcha.ready(function(){grecaptcha.execute(t.elements.$site_key,{action:"submit"}).then(function(e){n.append("grecaptcha_token",e),n.append("grecaptcha_version","v3"),t.submitData(n)})}):this.submitData(n)}},{key:"validateRequiredFields",value:function(){var e,t=this.elements.$form.find("[data-ui-e-required]"),n=window.ui_e_form_validation_messages;return!t.length||(e=!1,t.each(function(){jQuery(this).is(":checked")&&(e=!0)}),!!e)||(this.handleResponse({status:"error",message:n.required_fields},!0),!1)}},{key:"bindEvents",value:function(){var t=this;jQuery(this.elements.$form).submit(function(e){e.preventDefault(),elementorFrontend.isEditMode()||t.prepareData(t.elements.$form)}),elementorFrontend.isEditMode()&&elementor.channels.editor.on("ui-e-form-show-messages",function(){t.toggleMessages()})}}]),t}();jQuery(window).on("elementor/frontend/init",function(){function e(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})}elementorFrontend.hooks.addAction("frontend/element_ready/uicore-contact-form.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/uicore-newsletter.default",e)})});