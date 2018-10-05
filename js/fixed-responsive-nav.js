function FastClick(e){"use strict";var t;function n(e,t){return function(){return e.apply(t,arguments)}}this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=e,FastClick.notNeeded(e)||(deviceIsAndroid&&(e.addEventListener("mouseover",n(this.onMouse,this),!0),e.addEventListener("mousedown",n(this.onMouse,this),!0),e.addEventListener("mouseup",n(this.onMouse,this),!0)),e.addEventListener("click",n(this.onClick,this),!0),e.addEventListener("touchstart",n(this.onTouchStart,this),!1),e.addEventListener("touchmove",n(this.onTouchMove,this),!1),e.addEventListener("touchend",n(this.onTouchEnd,this),!1),e.addEventListener("touchcancel",n(this.onTouchCancel,this),!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(t=e.onclick,e.addEventListener("click",function(e){t(e)},!1),e.onclick=null))}!function(e,t,n){"use strict";t.responsiveNav=function(i,o){t.getComputedStyle||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var s,a,r,c,l,u,d=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},h=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},p=function(e,t){for(var n in t)e.setAttribute(n,t[n])},f=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},v=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},m=e.createElement("style"),g=e.documentElement,y=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(f(g,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t}(this.wrapper),a=this.options,s=this.wrapper,this._init(this)};return y.prototype={destroy:function(){this._removeStyles(),v(s,"closed"),v(s,"opened"),v(s,a.navClass),v(s,a.navClass+"-"+this.index),v(g,a.navActiveClass),s.removeAttribute("style"),s.removeAttribute("aria-hidden"),h(t,"resize",this,!1),h(t,"focus",this,!1),h(e.body,"touchmove",this,!1),h(r,"touchstart",this,!1),h(r,"touchend",this,!1),h(r,"mouseup",this,!1),h(r,"keyup",this,!1),h(r,"click",this,!1),a.customToggle?r.removeAttribute("aria-hidden"):r.parentNode.removeChild(r)},toggle:function(){!0===c&&(u?this.close():this.open())},open:function(){u||(v(s,"closed"),f(s,"opened"),f(g,a.navActiveClass),f(r,"active"),s.style.position=a.openPos,p(s,{"aria-hidden":"false"}),u=!0,a.open(),$("header").addClass("backcolor"))},close:function(){u&&(f(s,"closed"),v(s,"opened"),v(g,a.navActiveClass),v(r,"active"),p(s,{"aria-hidden":"true"}),$("header").removeClass("backcolor"),a.animate?(c=!1,setTimeout(function(){s.style.position="absolute",c=!0},a.transition+10)):s.style.position="absolute",u=!1,a.close())},resize:function(){"none"!==t.getComputedStyle(r,null).getPropertyValue("display")?(l=!0,p(r,{"aria-hidden":"false"}),s.className.match(/(^|\s)closed(\s|$)/)&&(p(s,{"aria-hidden":"true"}),s.style.position="absolute"),this._createStyles(),this._calcHeight()):(l=!1,p(r,{"aria-hidden":"true"}),p(s,{"aria-hidden":"false"}),s.style.position=a.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,f(s,a.navClass),f(s,a.navClass+"-"+this.index),f(s,"closed"),c=!0,u=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),d(t,"resize",this,!1),d(t,"focus",this,!1),d(e.body,"touchmove",this,!1),d(r,"touchstart",this,!1),d(r,"touchend",this,!1),d(r,"mouseup",this,!1),d(r,"keyup",this,!1),d(r,"click",this,!1),a.init()},_createStyles:function(){m.parentNode||(m.type="text/css",e.getElementsByTagName("head")[0].appendChild(m))},_removeStyles:function(){m.parentNode&&m.parentNode.removeChild(m)},_createToggle:function(){if(a.customToggle){var t=a.customToggle.replace("#","");if(e.getElementById(t))r=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");r=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=a.label,p(n,{href:"#",class:"nav-toggle"}),"after"===a.insert?s.parentNode.insertBefore(n,s.nextSibling):s.parentNode.insertBefore(n,s),r=n}},_closeOnNavClick:function(){if(a.closeOnNavClick){var e=s.getElementsByTagName("a"),t=this;!function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])}(e,function(n,i){d(e[n],"click",function(){l&&t.toggle()},!1)})}},_preventDefault:function(e){if(e.preventDefault)return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1;e.returnValue=!1},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,h(r,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),l&&!this.touchHasMoved){if("touchend"===e.type)return void this.toggle();var n=e||t.event;3!==n.which&&2!==n.button&&this.toggle()}},_onKeyUp:function(e){13===(e||t.event).keyCode&&this.toggle()},_transitions:function(){if(a.animate){var e=s.style,t="max-height "+a.transition+"ms";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<s.inner.length;t++)e+=s.inner[t].offsetHeight;var n="."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+a.jsClass+" ."+a.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";m.styleSheet?m.styleSheet.cssText=n:m.innerHTML=n,n=""}},new y(i,o)}}(document,window,0);var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if((i=window.getSelection()).rangeCount&&!i.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<200&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,i,o,s,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(s=e.changedTouches[0],(a=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||a).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(i=a.tagName.toLowerCase())){if(t=this.findControl(a)){if(this.focus(a),deviceIsAndroid)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),deviceIsIOS4&&"select"===i||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(o=a.fastClickScrollParent)||o.fastClickLastScrollTop===o.scrollTop)||(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||((t=this.onMouse(e))||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===e.style.msTouchAction},FastClick.attach=function(e){"use strict";return new FastClick(e)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,window.smoothScroll=function(e,t,n){"use strict";var i={speed:500,easing:"easeInOutCubic",updateURL:!1,callbackBefore:function(){},callbackAfter:function(){}},o=function(e,t){for(var n in t)e[n]=t[n];return e},s=function(n,s,a,r){a=o(i,a||{});var c,l,u,d,h,p=function(e){if(null===e||void 0===e)return{};var t={};return(e=e.split(";")).forEach(function(e){""!==(e=e.trim())&&(e=e.split(":"),t[e[0]]=e[1].trim())}),t}(n?n.getAttribute("data-options"):null),f=p.speed||a.speed,v=p.easing||a.easing,m=p.updateURL||a.updateURL,g=e.pageYOffset,y=function(e,t){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);return(n-=t)>=0?n:0}(t.querySelector(s),0),k=y-g,E=0;n&&"A"===n.tagName&&r&&r.preventDefault(),d=s,!0!==(h=m)&&"true"!==h||!history.pushState||history.pushState({pos:d.id},"",d);var C=function(){var i,o,r,d,h,p;u=g+k*(o=l=(l=(E+=16)/f)>1?1:l,"easeInQuad"==(i=v)?o*o:"easeOutQuad"==i?o*(2-o):"easeInOutQuad"==i?o<.5?2*o*o:(4-2*o)*o-1:"easeInCubic"==i?o*o*o:"easeOutCubic"==i?--o*o*o+1:"easeInOutCubic"==i?o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1:"easeInQuart"==i?o*o*o*o:"easeOutQuart"==i?1- --o*o*o*o:"easeInOutQuart"==i?o<.5?8*o*o*o*o:1-8*--o*o*o*o:"easeInQuint"==i?o*o*o*o*o:"easeOutQuint"==i?1+--o*o*o*o*o:"easeInOutQuint"==i?o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o:o),e.scrollTo(0,Math.floor(u)),r=u,d=y,h=c,p=e.pageYOffset,(r==d||p==d||e.innerHeight+p>=t.body.scrollHeight)&&(clearInterval(h),a.callbackAfter(n,s))};0===e.pageYOffset&&e.scrollTo(0,0),a.callbackBefore(n,s),c=setInterval(C,16)};return{init:function(n){if("querySelector"in t&&"addEventListener"in e&&Array.prototype.forEach){n=o(i,n||{});var a=t.querySelectorAll("[data-scroll]");Array.prototype.forEach.call(a,function(e,t){e.addEventListener("click",s.bind(null,e,e.getAttribute("href"),n),!1)})}},animateScroll:s}}(window,document),function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])};FastClick.attach(document.body),smoothScroll.init();var t=responsiveNav(".nav-collapse",{closeOnNavClick:!0}),n=document.createElement("div");n.className="mask",document.body.appendChild(n),null!==navigator.userAgent.match(/Android/i)&&(document.documentElement.className+=" android");var i,o=document.querySelector(".nav-collapse ul").querySelectorAll("a"),s=function(){i=[],e(o,function(e,t){var n=o[e].getAttribute("href").replace("#","");i.push(document.getElementById(n).offsetTop+200)})};s(),window.addEventListener("resize",function(){s()},!1);var a=function(t){e(o,function(e,t){o[e].parentNode.className=o[e].parentNode.className.replace(/[\s]{0,}active/,"")}),o[t].parentNode.className+=o[t].parentNode.className?" active":"active"},r=!1;window.addEventListener("scroll",function(){var t=window.pageYOffset,n=document.body,o=document.documentElement,s=window.innerHeight,c=Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);r||e(i,function(e,n){n>t&&(n<t+300||t+s>=c)&&a(e)})},!1),n.addEventListener("click",function(e){e.preventDefault(),t.close()},!1);var c=function(){setTimeout(function(){r=!1},500)};document.querySelector(".logo a").addEventListener("click",function(e){e.preventDefault(),r=!0,a(0),t.close(),history.pushState&&history.pushState("",document.title,window.location.pathname),c()},!1),e(o,function(e,t){o[e].addEventListener("click",function(t){t.preventDefault(),r=!0,a(e);var n=this.getAttribute("href").replace("#",""),i=document.getElementById(n);"home"!==n?(i.removeAttribute("id"),location.hash="#"+n,i.setAttribute("id",n)):history.pushState&&history.pushState("",document.title,window.location.pathname),c()},!1)})}}();