!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function O(e){return c=e,a=setTimeout(w,t),d?p(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=g();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,u-(e-c)):n}(e))}function S(e){return a=void 0,v&&o?p(e):(o=i=void 0,f)}function T(){var e=g(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return O(l);if(s)return a=setTimeout(w,t),p(l)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},T.flush=function(){return void 0===a?f:S(g())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),h={};O.addEventListener("input",e(t)((function(e){console.log(1),h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),O.reset(),localStorage.removeItem("feedback-form-state"),console.log(h)})),function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;O[0].value=e.email||"",O[1].value=e.message||""}()}();
//# sourceMappingURL=03-feedback.226dfb12.js.map
