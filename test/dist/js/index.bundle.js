webpackJsonp([0],{12:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"asd"})])}]},e.exports.render._withStripped=!0,e.hot.accept(),e.hot.data&&n(0).rerender("data-v-54e1c694",e.exports)},13:function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n(6)("0c7dcaa2",o,!1);o.locals||e.hot.accept(3,function(){var t=n(3);"string"==typeof t&&(t=[[e.i,t,""]]),r(t)}),e.hot.dispose(function(){r()})},16:function(e,t,n){var o,r,a;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
!function(i){r=[n(4)],o=i,void 0!==(a="function"==typeof o?o.apply(t,r):o)&&(e.exports=a)}(function(e){function t(t){var i=t||window.event,l=s.call(arguments,1),c=0,u=0,d=0,h=0;if(t=e.event.fix(i),t.type="mousewheel","detail"in i&&(d=i.detail*-1),"wheelDelta"in i&&(d=i.wheelDelta),"wheelDeltaY"in i&&(d=i.wheelDeltaY),"wheelDeltaX"in i&&(u=i.wheelDeltaX*-1),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(u=d*-1,d=0),c=0===d?u:d,"deltaY"in i&&(d=i.deltaY*-1,c=d),"deltaX"in i&&(u=i.deltaX,0===d&&(c=u*-1)),0!==d||0!==u){if(1===i.deltaMode){var p=e.data(this,"mousewheel-line-height");c*=p,d*=p,u*=p}else if(2===i.deltaMode){var f=e.data(this,"mousewheel-page-height");c*=f,d*=f,u*=f}return h=Math.max(Math.abs(d),Math.abs(u)),(!a||h<a)&&(a=h,o(i,h)&&(a/=40)),o(i,h)&&(c/=40,u/=40,d/=40),c=Math[c>=1?"floor":"ceil"](c/a),u=Math[u>=1?"floor":"ceil"](u/a),d=Math[d>=1?"floor":"ceil"](d/a),t.deltaX=u,t.deltaY=d,t.deltaFactor=a,t.deltaMode=0,l.unshift(t,c,u,d),r&&clearTimeout(r),r=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,l)}}function n(){a=null}function o(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var r,a,i=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],l="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s=Array.prototype.slice;if(e.event.fixHooks)for(var c=i.length;c;)e.event.fixHooks[i[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var n=l.length;n;)this.addEventListener(l[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=l.length;e;)this.removeEventListener(l[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(9),n(20);var r=n(18),a=o(r);n(16);var i=n(19),l=o(i);console.log(a.default),function(e){console.log(e)}("hello world!!!!!!"),t.default={data:function(){return{}},mounted:function(){new l.default}}},18:function(e,t,n){"use strict";var o={sayHello:function(e){console.log(e)}};e.exports=o},19:function(e,t,n){"use strict";(function(t){function n(){this.partNum=0,this.partTop=[],this.partLength=t(".part").length,this.canScroll=!0;for(var e=0;e<this.partLength;e++)this.partTop[e]=t(".part").eq(e).offset().top;this.init()}n.prototype={init:function(){var e,n=this.partTop,o=this;if(t(".part").mousewheel(function(e,t){return o.loghandle(e,t),!1}),t(window).scroll(function(){e=t(window).scrollTop(),t(".right-nav").show(),t(".right-nav ul li").removeClass("current"),e<=n[0]?(o.partNum=0,t(".nav01").addClass("current")):e>n[0]&&e<=n[1]?(o.partNum=1,t(".nav02").addClass("current")):e>n[1]&&e<=n[2]?(o.partNum=2,t(".nav03").addClass("current")):e>n[2]&&e<=n[3]?(o.partNum=3,t(".nav04").addClass("current")):e>n[3]&&(o.partNum=4,t(".nav05").addClass("current")),t(document).scrollTop()>=t(document).height()-t(window).height()&&(o.partNum=4,t(".right-nav ul li").removeClass("current"),t(".nav05").addClass("current")),t(".part"+(o.partNum+1)).addClass("active").siblings().removeClass("active")}),o.right_nav_scroll(),"ontouchstart"in window){var r=0,a=0,i=0,l=0;t(".pages").length,t(window)[0].addEventListener("touchstart",function(e){r=e.touches[0].clientX,a=e.touches[0].clientY,_flagX=r,l=a}),t(window)[0].addEventListener("touchmove",function(e){e.preventDefault(),i=e.touches[0].clientY,_flagX=0,l=i}),t(window)[0].addEventListener("touchend",function(e){var t=i-a;return Math.abs(t),Math.abs(l-a)>=10&&(t<0?(console.log("down"),o.scroll_down()):(console.log("up"),o.scroll_up())),!1})}},right_nav_scroll:function(){var e=this;t(".right-nav ul li").click(function(){var n=t(this).index(),o=e.partTop[n];t("html,body").animate({scrollTop:o})})},scroll_up:function(){var e=this;if(1==e.canScroll&&e.partNum>0){e.canScroll=!1,e.partNum--;var n=t(".part").eq(e.partNum).offset().top;t("html,body").animate({scrollTop:n},function(){e.canScroll=!0})}},scroll_down:function(){var e=this;if(1==e.canScroll&&e.partNum<this.partLength-1){e.canScroll=!1,e.partNum++;var n=t(".part").eq(e.partNum).offset().top;t("html,body").animate({scrollTop:n},function(){e.canScroll=!0})}},loghandle:function(e,t){t>0&&this.scroll_up(),t<0&&this.scroll_down()}},e.exports=n}).call(t,n(4))},20:function(e,t,n){"use strict";var o={loadScript:function(e){var t=document.createElement("script");t.type="text/script",t.src=e,document.body.appendChild(t)},loadLink:function(e){var t=document.createElement("link"),n=document.getElementsByTagName("head")[0];t.type="text/css",t.href=e,n.appendChild(t)}};e.exports=o},3:function(e,t,n){t=e.exports=n(5)(),t.push([e.i,"\n.asd {\n  width: 50px;\n  height: 50px;\n  background: red;\n}\n.part {\n  width: 100%;\n  height: 921px;\n  overflow: hidden;\n}\n.part0 {\n  background: #C99;\n}\n.part1 {\n  background: #846c68;\n}\n.part2 {\n  background: #C9F;\n}\n.part3 {\n  background: #CF9;\n}\n.part4 {\n  background: #F99;\n}\n.part5 {\n  background: #CFF;\n}\n.footer {\n  width: 100%;\n  height: 60px;\n  background: #000;\n}\n.right-nav {\n  position: fixed;\n  right: 0;\n  top: 100px;\n  width: 200px;\n}\n.right-nav li {\n    width: 100px;\n    padding: 20px 0;\n    border: 1px solid #F30;\n    margin: 4px auto;\n    text-align: center;\n    color: #000;\n    list-style: none;\n    cursor: pointer;\n}\n.right-nav li.current {\n      background: #F30;\n      color: #FFF;\n}\n",""])},38:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=o(r),i=n(7),l=o(i);new a.default({el:"#app",data:{},render:function(e){return e(l.default)}})},7:function(e,t,n){n(13);var o=n(2)(n(17),n(12),null,null);o.options.__file="E:\\React\\proreact\\work_webpackDemo\\webpack2\\test\\src\\components\\App.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions."),function(){var t=n(0);t.install(n(1),!1),t.compatible&&(e.hot.accept(),e.hot.data?t.reload("data-v-54e1c694",o.options):t.createRecord("data-v-54e1c694",o.options))}(),e.exports=o.exports}},[38]);