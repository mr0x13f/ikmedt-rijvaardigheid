!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";var o,i;e.r(n),function(t){t[t.ACCELERATE=0]="ACCELERATE",t[t.BRAKE=1]="BRAKE",t[t.CLUTCH=2]="CLUTCH",t[t.HANDBRAKE=3]="HANDBRAKE",t[t.HEADLIGHTS=4]="HEADLIGHTS",t[t.NEUTRAL=5]="NEUTRAL"}(o||(o={})),function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT"}(i||(i={}));var r,s,u,c,a,l=function(){function t(t){var n,e,r;this.mapping=((n={})[o.ACCELERATE]=7,n[o.BRAKE]=6,n[o.CLUTCH]=4,n[o.CLUTCH]=5,n[o.HANDBRAKE]=0,n[o.HEADLIGHTS]=2,n[o.NEUTRAL]=11,n),this.framesActive=((e={})[o.ACCELERATE]=0,e[o.BRAKE]=0,e[o.CLUTCH]=0,e[o.CLUTCH]=0,e[o.HANDBRAKE]=0,e[o.HEADLIGHTS]=0,e[o.NEUTRAL]=0,e),this.axis=((r={})[i.LEFT]=[0,1],r[i.RIGHT]=[2,3],r),this.id=t}return t.prototype.getControllerState=function(){return navigator.getGamepads()[0]},t.prototype.getAxis=function(t){var n=[];for(var e in this.axis[t])n.push(this.getControllerState().axes[e]);return n},t.prototype.getButtons=function(){return this.getControllerState().buttons},t.prototype.getButtonIdByControls=function(t){return this.mapping[t]},t.prototype.isDown=function(t){return this.framesActive[t]>1},t.prototype.incrementAction=function(t){this.framesActive[t]+=1},t.prototype.resetAction=function(t){this.framesActive[t]=0},t}();!function(t){var n;function e(){return null!=n}t.init=function(){n=null,window.addEventListener("gamepadconnected",(function(t){var e=t;n=new l(e.gamepad.id),console.log(e.gamepad.id+" has connected.")})),window.addEventListener("gamepaddisconnected",(function(t){var e=t;null!=n&&(n=null),console.log(e.gamepad.id+" has disconnected.")}))},t.update=function(){if(console.log("Omae wa mou shindeiru"),e()){console.log("NANI?");var t=null==n?void 0:n.getButtons();for(var o in t){console.log("HUEHUEHUE"),o.value>0&&console.log("Button press")}}},t.isPressed=function(t){if(e()){var o=null==n?void 0:n.getButtons(),i=null==n?void 0:n.getButtonIdByControls(t),r=o[i].value>0||o[i].pressed;return r?(null==n||n.incrementAction(t),r):(null==n||n.resetAction(t),r)}},t.isDown=function(t){if(e())return null==n?void 0:n.isDown(t)},t.getAxis=function(t){e()&&(null==n||n.getAxis(t))}}(r||(r={})),u=s||(s={}),c=[],a={},u.init=function(){var t;c=[],a={},t=0,window.requestAnimationFrame((function n(e){u.dt=(e-t)/1e3,t=e,function(){r.update();for(var t=0,n=c;t<n.length;t++)n[t].doUpdate()}(),window.requestAnimationFrame(n)}))},u.addEntity=function(t){c.push(t),t.id&&(a[t.id]=t)},u.getEntityById=function(t){return a[t]};var f,p,h=function(){function t(){}return t.getSource=function(){return""},t.load=function(t){},t.show=function(t){var n=this,e=document.getElementById("js--scene");e.setAttribute("template","src",this.getSource()),s.init(),e.addEventListener("DOMNodeInserted",(function(e){window.requestAnimationFrame((function(){n.load(t)}))}))},t}(),d=function(){function t(t,n,e){this.x=0,this.y=0,this.z=0,this.x=t||0,this.y=n||t||0,this.z=e||t||0}return t.prototype.add=function(n){return new t(this.x+n.x,this.y+n.y,this.z+n.z)},t.prototype.sub=function(n){return new t(this.x-n.x,this.y-n.y,this.z-n.z)},t.prototype.mul=function(n){return new t(this.x*n.x,this.y*n.y,this.z*n.z)},t.prototype.div=function(n){return new t(this.x/n.x,this.y/n.y,this.z/n.z)},t.prototype.mulNum=function(n){return new t(this.x*n,this.y*n,this.z*n)},t.prototype.divNum=function(n){return new t(this.x/n,this.y/n,this.z/n)},t.prototype.numDiv=function(n){return new t(n/this.x,n/this.y,n/this.z)},t}(),y=function(){function t(t){this.element=null,this.object3D=null,this.id=null,t?(this.id=t,this.element=document.getElementById(t),this.object3D=this.element.object3D,this.position=new d(this.object3D.position.x,this.object3D.position.y,this.object3D.position.z),this.rotation=new d(this.object3D.rotation.x,this.object3D.rotation.y,this.object3D.rotation.z),this.velocity=new d(0,0,0)):(this.position=new d(0,0,0),this.rotation=new d(0,0,0),this.velocity=new d(0,0,0)),s.addEntity(this)}return t.prototype.update=function(){},t.prototype.doUpdate=function(){this.update(),this.position=this.position.add(this.velocity.mulNum(s.dt)),this.object3D.position.x=this.position.x,this.object3D.position.y=this.position.y,this.object3D.position.z=this.position.z,this.object3D.rotation.x=this.rotation.x,this.object3D.rotation.y=this.rotation.y,this.object3D.rotation.z=this.rotation.z},t}(),g=(f=function(t,n){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}f(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),v=function(t){function n(n){var e=t.call(this,n)||this;return e.onclick=function(){},e.element?(e.element.classList.add("ui"),e.element.onclick=function(){e.onclick()},e):e}return g(n,t),n}(y),m=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),A=function(t){function n(n){var e=t.call(this,n)||this;return e.isHeadlightsOn=!1,e.headlightLeft=document.getElementById("js--car-headlight-left"),e.headlightRight=document.getElementById("js--car-headlight-right"),document.addEventListener("keydown",(function(t){"h"==t.key&&e.toggleHeadlights()})),e}return m(n,t),n.prototype.update=function(){var t=new d(0,0,-1);this.velocity=t.mulNum(5)},n.prototype.toggleHeadlights=function(){this.isHeadlightsOn=!this.isHeadlightsOn,this.updateHeadlights()},n.prototype.setHeadlights=function(t){this.isHeadlightsOn=t,this.updateHeadlights()},n.prototype.updateHeadlights=function(){this.headlightLeft.setAttribute("visible",""+this.isHeadlightsOn),this.headlightRight.setAttribute("visible",""+this.isHeadlightsOn)},n}(y),b=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();!function(t){t[t.DAY=0]="DAY",t[t.NIGHT=1]="NIGHT"}(p||(p={}));var _=function(t){function n(e){var o=t.call(this,e)||this;return o.currentSky=p.DAY,n.skies[p.DAY]=document.getElementById("js--sky-day"),n.skies[p.NIGHT]=document.getElementById("js--sky-night"),o.currentSky=p.DAY,o.setSky(o.currentSky),o}return b(n,t),n.prototype.setSky=function(t){this.clearSky(),this.currentSky=t,n.skies[t].setAttribute("visible","true")},n.prototype.clearSky=function(){n.skies[p.DAY].setAttribute("visible","false"),n.skies[p.NIGHT].setAttribute("visible","false")},n.skies={},n}(y),w=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return w(n,t),n.getSource=function(){return"scenes/simulation.html"},n.load=function(t){new A("js--car").setHeadlights(!1),new _("js--sky").setSky(p.DAY)},n}(h),j=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),H=function(t){function n(n){var e=t.call(this,n)||this;return e.element,e}return j(n,t),n.prototype.click=function(){var t;null===(t=this.element)||void 0===t||t.click()},n}(y),O=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),D=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return O(n,t),n.getSource=function(){return"scenes/menu.html"},n.load=function(t){new H("js--cursor");new v("js--button").onclick=function(){E.show()}},n}(h);window.onload=function(){r.init(),D.show()}}]);