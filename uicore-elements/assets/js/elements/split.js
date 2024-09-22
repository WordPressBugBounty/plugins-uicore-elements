"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}require("./split.scss");var _splitting=_interopRequireDefault(require("./splitting.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var i=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,i?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.addEventListener("DOMContentLoaded",function(){var t=function(){_inherits(t,elementorModules.frontend.handlers.Base);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"bindEvents",value:function(){"ui-split-animate"===this.getElementSettings("ui_animate_split")&&(this.split(),this.animate())}},{key:"onElementChange",value:function(e){var t=this,n="ui-split-animate"===this.getElementSettings("ui_animate_split");"ui_animate_split"===e&&n&&(this.unsplit(),setTimeout(function(){t.split()},100)),"ui_animate_split_by"===e&&n&&(this.unsplit(),setTimeout(function(){t.split()},100)),n?-1!==e.indexOf("ui_animate")&&(this.$element.find("."+this.get_split(!1)).attr("class",this.get_split(!1)+""),setTimeout(function(){t.animate()},150)):"ui_animate_split"===e&&this.unsplit()}},{key:"split",value:function(){var e=this.getElementSettings("ui_animate_split_style"),t=this.get_split(),n=this.$element.find(".elementor-widget-container > *:not(style):not(.ui-e-highlight-icon):not(.ui-e-highlight-image)");0==n.length&&(this.$element.find(".elementor-widget-container").wrapInner('<div class="elementor-text-editor"></div>'),n=this.$element.find(".elementor-widget-container > *:not(style)")),(0,_splitting.default)({target:n,by:t,key:"ui-"}),n.addClass("ui-e-"+e)}},{key:"unsplit",value:function(){var e=this.$element.find(".elementor-widget-container > *:not(style)")[0],t=e.innerHTML;this.$element.find(".elementor-widget-container > *:not(style)")[0].innerHTML=t.replace(/<span class="whitespace">(\s)<\/span>/g,"$1").replace(/<span class="char" data-char="\S+" style="--char-index:\s?\d+;">(\S+)<\/span>/g,"$1").replace(/ aria-hidden="true"/g,"").replace(/<span class="word" data-word="\S+" style="--word-index:\s?\d+;( --line-index:\s?\d+;)?">(\S+)<\/span>/g,"$2"),e.classList.remove("splitting")}},{key:"animate",value:function(){var e=this,t=jQuery(this.$element),n=this.getElementSettings("ui_animate_split_style"),i=this.$element.find("."+this.get_split(!1)),r=this.$element.find(".elementor-widget-container > *:not(style)");jQuery(this.$element).addClass("elementor-invisible"),i.removeClass(n),r.addClass("ui-e-"+n),"undefined"!=typeof Waypoint?new Waypoint({element:r,handler:function(e){t.css("opacity",1),setTimeout(function(){r.removeClass("ui-e-"+n)},100),i.addClass("ui-e-animated"),i.addClass(n)},offset:"90%"}):(t.css("opacity",1),setTimeout(function(){r.removeClass("ui-e-"+n)},200),i.addClass("ui-e-animated"),i.addClass(n)),setTimeout(function(){jQuery(e.$element).removeClass("elementor-invisible")},1)}},{key:"get_split",value:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=this.getElementSettings("ui_animate_split_by");return e?t:(t="lines"===t?"words":t).slice(0,-1)}}]),t}();jQuery(window).on("elementor/frontend/init",function(){function e(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})}elementorFrontend.hooks.addAction("frontend/element_ready/heading.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/text-editor.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/uicore-the-title.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/uicore-page-description.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/highlighted-text.default",e)})},!1);