"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.addEventListener("DOMContentLoaded",function(){var t=function(){_inherits(t,elementorModules.frontend.handlers.Base);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"runLayout",value:function(){var e=this.getElementSettings("layout"),t=this.$element.find(".ui-e-wrp"),r=elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),"columns");"inner-border"===e?t.find(".ui-e-item").css({"border-width":"var(--ui-e-border-width, 2px)","border-radius":"var(--ui-e-radius, 0)"}):this.applyStyles(t,e,r)}},{key:"applyStyles",value:function(r,e,o){function n(t,r){Object.keys(r).forEach(function(e){t.css(e,r[e])})}"outer-border"==e?r.each(function(e){var t=jQuery(this).find(".ui-e-item");0===e?n(t,{"border-top-left-radius":"var(--ui-e-top-radius)","border-left-width":"var(--ui-e-border-width)","border-top-width":"var(--ui-e-border-width)"}):e===o-1?n(t,{"border-top-right-radius":"var(--ui-e-right-radius)","border-top-width":"var(--ui-e-border-width)"}):0<e&&e<=o-1&&t.css("border-top-width","var(--ui-e-border-width)"),e%o==0&&0!==e&&e!==r.length-o&&t.css("border-left-width","var(--ui-e-border-width)"),e===r.length-o?n(t,{"border-bottom-left-radius":"var(--ui-e-left-radius)","border-left-width":"var(--ui-e-border-width)"}):e===r.length-1&&n(t,{"border-bottom-right-radius":"var(--ui-e-bottom-radius)"})}):"divider"==e&&r.each(function(e){var t=jQuery(this).find(".ui-e-item");e%o==o-1&&t.css("border-right-width","0px"),e>=r.length-o&&t.css("border-bottom-width","0px")})}},{key:"resetStyles",value:function(){this.$element.find(".ui-e-wrp").each(function(){jQuery(this).find(".ui-e-item").css({"border-width":"","border-radius":""})})}},{key:"bindEvents",value:function(){var e,t=this;this.runLayout(),jQuery(window).on("resize",function(){clearTimeout(e),e=setTimeout(function(){t.resetStyles(),t.runLayout()},500)})}}]),t}();jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/uicore-logo-grid.default",function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})})})});