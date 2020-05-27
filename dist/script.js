!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";var n;e.r(i),function(t){var i=[],e={};t.init=function(){var e;e=0,window.requestAnimationFrame((function n(o){t.dt=(o-e)/1e3,e=o,function(){for(var t=0,e=i;t<e.length;t++)e[t].doUpdate()}(),window.requestAnimationFrame(n)}))},t.addEntity=function(t){i.push(t),t.id&&(e[t.id]=t)},t.getEntityById=function(t){return e[t]}}(n||(n={}));var o,r,s=function(){function t(t,i,e){this.x=0,this.y=0,this.z=0,this.x=t||0,this.y=i||t||0,this.z=e||t||0}return t.prototype.add=function(i){return new t(this.x+i.x,this.y+i.y,this.z+i.z)},t.prototype.sub=function(i){return new t(this.x-i.x,this.y-i.y,this.z-i.z)},t.prototype.mul=function(i){return new t(this.x*i.x,this.y*i.y,this.z*i.z)},t.prototype.div=function(i){return new t(this.x/i.x,this.y/i.y,this.z/i.z)},t.prototype.mulNum=function(i){return new t(this.x*i,this.y*i,this.z*i)},t.prototype.divNum=function(i){return new t(this.x/i,this.y/i,this.z/i)},t.prototype.numDiv=function(i){return new t(i/this.x,i/this.y,i/this.z)},t}(),u=function(){function t(t){this.element=null,this.object3D=null,this.id=null,t?(this.id=t,this.element=document.getElementById(t),this.object3D=this.element.object3D,this.position=new s(this.object3D.position.x,this.object3D.position.y,this.object3D.position.z),this.rotation=new s(this.object3D.rotation.x,this.object3D.rotation.y,this.object3D.rotation.z),this.velocity=new s(0,0,0)):(this.position=new s(0,0,0),this.rotation=new s(0,0,0),this.velocity=new s(0,0,0)),n.addEntity(this)}return t.prototype.update=function(){},t.prototype.doUpdate=function(){this.update(),this.position=this.position.add(this.velocity.mulNum(n.dt)),this.object3D.position.x=this.position.x,this.object3D.position.y=this.position.y,this.object3D.position.z=this.position.z,this.object3D.rotation.x=this.rotation.x,this.object3D.rotation.y=this.rotation.y,this.object3D.rotation.z=this.rotation.z},t}(),h=(o=function(t,i){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)},function(t,i){function e(){this.constructor=t}o(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}),c=function(t){function i(i){var e=t.call(this,i)||this;return e.headlightLeft=null,e.headlightRight=null,e.isHeadlightsOn=!1,e.headlightLeft=document.getElementById("js--car-headlight-left"),e.headlightRight=document.getElementById("js--car-headlight-right"),document.addEventListener("keydown",(function(t){"h"==t.key&&e.toggleHeadlights()})),e}return h(i,t),i.prototype.update=function(){var t=new s(0,0,-1);this.velocity=t.mulNum(5)},i.prototype.toggleHeadlights=function(){this.isHeadlightsOn=!this.isHeadlightsOn,this.updateHeadlights()},i.prototype.setHeadlights=function(t){this.isHeadlightsOn=t,this.updateHeadlights()},i.prototype.updateHeadlights=function(){null!=this.headlightLeft&&this.headlightLeft.setAttribute("visible",""+this.isHeadlightsOn),null!=this.headlightRight&&this.headlightRight.setAttribute("visible",""+this.isHeadlightsOn)},i}(u),a=function(){var t=function(i,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(i,e)};return function(i,e){function n(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();!function(t){t[t.DAY=0]="DAY",t[t.NIGHT=1]="NIGHT"}(r||(r={}));var l=function(t){function i(e){var n=t.call(this,e)||this;return n.currentSky=r.DAY,i.skies[r.DAY]=document.getElementById("js--sky-day"),i.skies[r.NIGHT]=document.getElementById("js--sky-night"),n.currentSky=r.DAY,n.setSky(n.currentSky),n}return a(i,t),i.prototype.setSky=function(t){this.clearSky(),this.currentSky=t,i.skies[t].setAttribute("visible","true")},i.prototype.clearSky=function(){i.skies[r.DAY].setAttribute("visible","false"),i.skies[r.NIGHT].setAttribute("visible","false")},i.skies={},i}(u);window.onload=function(){window.requestAnimationFrame((function(){n.init(),new c("js--car").setHeadlights(!1),new l("js--sky").setSky(r.DAY)}))}}]);