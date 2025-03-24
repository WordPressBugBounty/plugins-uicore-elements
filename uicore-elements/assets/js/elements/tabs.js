"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var n,i,r,o,a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(a)return i=!(n=!0),{s:function(){a=a.call(t)},n:function(){var t=a.next();return n=t.done,t},e:function(t){i=!0,r=t},f:function(){try{n||null==a.return||a.return()}finally{if(i)throw r}}};if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return a&&(t=a),o=0,{s:e=function(){},n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=_superPropBase(t,e);if(i)return(i=Object.getOwnPropertyDescriptor(i,e)).get?i.get.call(arguments.length<3?t:n):i.value}).apply(this,arguments)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(n){var i=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,i?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}window.addEventListener("DOMContentLoaded",function(){var e=function(){_inherits(r,elementorModules.frontend.handlers.Base);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,[{key:"getTabTitleFilterSelector",value:function(t){return"[".concat(this.getSettings("dataAttributes").tabIndex,'="').concat(t,'"]')}},{key:"getTabContentFilterSelector",value:function(t){return"*:nth-child(".concat(t,")")}},{key:"getTabIndex",value:function(t){return t.getAttribute(this.getSettings("dataAttributes").tabIndex)}},{key:"getActiveTabIndex",value:function(){var t=this.getSettings(),e=t.ariaAttributes.activeTitleSelector,t=t.dataAttributes.tabIndex;return this.elements.$tabTitles.filter(e).attr(t)||null}},{key:"getWidgetNumber",value:function(){return this.$element.find("> .elementor-widget-container > .ui-e-tabs, > .ui-e-tabs").attr("data-widget-number")}},{key:"getDefaultSettings",value:function(){var t=this.getWidgetNumber();return{selectors:{widgetContainer:'[data-widget-number="'.concat(t,'"]'),tabTitle:'[id*="ui-e-tab-title-'.concat(t,'"]'),tabTitleIcon:'[id*="ui-e-tab-title-'.concat(t,'"] > .ui-e-tab-icon'),tabTitleText:'[id*="ui-e-tab-title-'.concat(t,'"] > .ui-e-tab-title-text'),tabContent:'[data-widget-number="'.concat(t,'"] > .ui-e-tabs-content > .e-con'),headingContainer:'[data-widget-number="'.concat(t,'"] > .ui-e-tabs-heading'),activeTabContentContainers:'[id*="ui-e-tab-content-'.concat(t,'"].ui-active')},classes:{active:"ui-active"},dataAttributes:{tabIndex:"data-tab-index"},ariaAttributes:{titleStateAttribute:"aria-selected",activeTitleSelector:'[aria-selected="true"]'},showTabFn:"show",hideTabFn:"hide",toggleSelf:!1,hidePrevious:!0,autoExpand:!0}}},{key:"getDefaultElements",value:function(){var t=this.getSettings("selectors");return{$widgetContainer:this.findElement(t.widgetContainer),$tabTitles:this.findElement(t.tabTitle),$tabContents:this.findElement(t.tabContent),$headingContainer:this.findElement(t.headingContainer)}}},{key:"getKeyboardNavigationSettings",value:function(){return this.getSettings()}},{key:"activateDefaultTab",value:function(){var t=this.getSettings(),e=this.getEditSettings("activeItemIndex")||1,t={showTabFn:t.showTabFn,hideTabFn:t.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(e),this.setSettings(t),this.elements.$widgetContainer.addClass("e-activated")}},{key:"deactivateActiveTab",value:function(t){var e=this,n=this.getSettings(),i=n.classes.active,r=n.ariaAttributes.activeTitleSelector,o="."+i,r=this.elements.$tabTitles.filter(r),a=this.elements.$tabContents.filter(o);return this.setTabDeactivationAttributes(r,t),a.removeClass(i),a[n.hideTabFn](0,function(){return e.onHideTabContent(a)}),a}},{key:"getTitleActivationAttributes",value:function(){return _defineProperty({tabindex:"0"},this.getSettings("ariaAttributes").titleStateAttribute,"true")}},{key:"setTabDeactivationAttributes",value:function(t){var e=this.getSettings("ariaAttributes").titleStateAttribute;t.attr(_defineProperty({tabindex:"-1"},e,"false"))}},{key:"onHideTabContent",value:function(){}},{key:"activateTab",value:function(t){var e=this,n=this.getSettings(),i=n.classes.active,r="show"===n.showTabFn?0:400,o=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),a=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t));o.length||(t=Math.max(t-1,1),o=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),a=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))),o.attr(this.getTitleActivationAttributes()),a.addClass(i),a[n.showTabFn](r,function(){return e.onShowTabContent(a)})}},{key:"onShowTabContent",value:function(t){elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate",t),elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")}},{key:"isActiveTab",value:function(t){var e=this.getSettings(),e="true"===this.elements.$tabTitles.filter("[".concat(e.dataAttributes.tabIndex,'="').concat(t,'"]')).attr(e.ariaAttributes.titleStateAttribute),t=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t)).hasClass(this.getActiveClass());return e&&t}},{key:"onTabClick",value:function(t){t.preventDefault(),this.changeActiveTab(null==(t=t.currentTarget)?void 0:t.getAttribute(this.getSettings("dataAttributes").tabIndex),!0)}},{key:"getTabEvents",value:function(){return{click:this.onTabClick.bind(this)}}},{key:"bindEvents",value:function(){this.elements.$tabTitles.on(this.getTabEvents()),elementorFrontend.elements.$window.on("resize",this.setTouchMode.bind(this)),elementorFrontend.elements.$window.on("elementor/nested-tabs/activate",this.reInitSwipers),elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard",this.changeActiveTabByKeyboard.bind(this))}},{key:"unbindEvents",value:function(){this.elements.$tabTitles.off(),this.elements.$tabContents.children().off(),elementorFrontend.elements.$window.off("resize"),elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")}},{key:"reInitSwipers",value:function(t,e){var n,i=_createForOfIteratorHelper(e.querySelectorAll(".".concat(elementorFrontend.config.swiperClass)));try{for(i.s();!(n=i.n()).done;){var r=n.value;if(!r.swiper)return;r.swiper.initialized=!1,r.swiper.init()}}catch(t){i.e(t)}finally{i.f()}}},{key:"onInit",value:function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=_get(_getPrototypeOf(r.prototype),"onInit",this)).call.apply(t,[this].concat(n)),this.getSettings("autoExpand")&&this.activateDefaultTab();this.elements.$headingContainer[0],this.getTabsDirection(),this.getHorizontalScrollSetting();this.setTouchMode(),"nested-tabs.default"===this.getSettings("elementName")&&new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())}},{key:"onEditSettingsChange",value:function(t,e){"activeItemIndex"===t&&this.changeActiveTab(e,!1)}},{key:"onElementChange",value:function(t){this.checkSliderPropsToWatch(t)&&(this.elements.$headingContainer[0],this.getTabsDirection(),this.getHorizontalScrollSetting())}},{key:"checkSliderPropsToWatch",value:function(t){return 0===t.indexOf("horizontal_scroll")||"breakpoint_selector"===t||0===t.indexOf("tabs_justify_horizontal")||0===t.indexOf("tabs_title_space_between")}},{key:"changeActiveTab",value:function(t){if(1<arguments.length&&void 0!==arguments[1]&&arguments[1]&&this.isEdit&&this.isElementInTheCurrentDocument())return window.top.$e.run("document/repeater/select",{container:elementor.getContainer(this.$element.attr("data-id")),index:parseInt(t)});var e=this.isActiveTab(t),n=this.getSettings();!n.toggleSelf&&e||!n.hidePrevious||this.deactivateActiveTab(t),!n.hidePrevious&&e&&this.deactivateActiveTab(t),e||(this.isAccordionVersion()?this.activateMobileTab(t):this.activateTab(t))}},{key:"changeActiveTabByKeyboard",value:function(t,e){e.widgetId.toString()===this.getID().toString()&&this.changeActiveTab(e.titleIndex,!0)}},{key:"activateMobileTab",value:function(t){var e=this;setTimeout(function(){e.activateTab(t),e.forceActiveTabToBeInViewport(t)},10)}},{key:"forceActiveTabToBeInViewport",value:function(t){elementorFrontend.isEditMode()&&(t=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),elementor.helpers.isInViewport(t[0])||t[0].scrollIntoView({block:"center"}))}},{key:"getActiveClass",value:function(){return this.getSettings().classes.active}},{key:"getTabsDirection",value:function(){var t=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"tabs_justify_horizontal","",t)}},{key:"getHorizontalScrollSetting",value:function(){var t=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"horizontal_scroll","",t)}},{key:"isAccordionVersion",value:function(){return"contents"===this.elements.$headingContainer.css("display")}},{key:"setTouchMode",value:function(){var t=this.getSettings("selectors").widgetContainer;if(elementorFrontend.isEditMode()||"resize"===(null==(e=event)?void 0:e.type)){var e=elementorFrontend.getCurrentDeviceMode();if(-1!==["mobile","mobile_extra","tablet","tablet_extra"].indexOf(e))return void this.$element.find(t).attr("data-touch-mode","true")}else if("ontouchstart"in window)return void this.$element.find(t).attr("data-touch-mode","true");this.$element.find(t).attr("data-touch-mode","false")}},{key:"updateIndexValues",value:function(){var t=this.getDefaultElements(),e=t.$widgetContainer,a=t.$tabContents,t=t.$tabTitles,s=this.getSettings(),l=s.dataAttributes.tabIndex,c=e.data("widgetNumber");t.each(function(t,e){var n,i=t+1,r="ui-e-tab-title-".concat(c).concat(i),o="ui-e-tab-content-".concat(c).concat(i);e.setAttribute("id",r),e.setAttribute("style","--ui-e-tabs-order: ".concat(i)),e.setAttribute(l,i),e.setAttribute("aria-controls",o),null!=(n=e.querySelector(s.selectors.tabTitleIcon))&&n.setAttribute("data-binding-index",i),e.querySelector(s.selectors.tabTitleText).setAttribute("data-binding-index",i),a[t].setAttribute("aria-labelledby",r),a[t].setAttribute(l,i),a[t].setAttribute("id",o),a[t].setAttribute("style","--ui-e-tabs-order: ".concat(i))})}}]),r}();jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/uicore-tabs.default",function(t){elementorFrontend.elementsHandler.addHandler(e,{$element:t})})})});