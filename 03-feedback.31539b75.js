var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,f=setTimeout(S,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=o}function S(){var e=m();if(h(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-u);return g?d(n,o-(e-c)):n}(e))}function j(e){return f=void 0,b&&r?y(e):(r=i=void 0,a)}function w(){var e=m(),n=h(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return T(u);if(g)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:j(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y={email:"",message:""};!function(){try{if(dataLS=localStorage.getItem("feedback-form-state"),!dataLS)return;y=JSON.parse(dataLS);for(let e in y)b.elements[e].value=y[e]}catch(e){console.log("Get state error: ",e.message)}}(),b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.currentTarget.elements,r={email:t.value,message:n.value};console.log("This is Form Data:",r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.31539b75.js.map
