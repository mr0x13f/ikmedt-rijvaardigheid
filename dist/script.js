!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i;n.r(e),function(t){t[t.ACCELERATE=0]="ACCELERATE",t[t.BRAKE=1]="BRAKE",t[t.STEERING=2]="STEERING",t[t.CLUTCH=3]="CLUTCH",t[t.HANDBRAKE=4]="HANDBRAKE",t[t.HEADLIGHTS=5]="HEADLIGHTS",t[t.NEUTRAL=6]="NEUTRAL",t[t.DOGBOX_UP=7]="DOGBOX_UP",t[t.DOGBOX_DOWN=8]="DOGBOX_DOWN",t[t.PAUSE=9]="PAUSE",t[t.CONFIRM=10]="CONFIRM"}(i||(i={}));var o,r,s,c,u,a=function(){function t(t){this.inverted=!1,this.minValue=0,this.index=t}return t.prototype.getValue=function(t){return t.buttons[this.index].value*(this.inverted?-1:1)},t.prototype.isPressed=function(t){return this.getValue(t)>this.minValue},t.prototype.invert=function(){this.inverted=!0},t.prototype.setMinValue=function(t){this.minValue=t},t}(),h=function(){function t(t){this.minDeadzone=0,this.maxDeadzone=1,this.isNormalized=!1,this.index=t}return t.prototype.getValue=function(t){var e=t.axes[this.index].valueOf(),n=e>0,i=Math.abs(e);return i<this.minDeadzone?i=this.minDeadzone:i>this.maxDeadzone&&(i=this.maxDeadzone),i=(i-this.minDeadzone)/(this.maxDeadzone-this.minDeadzone),i*=n?1:-1,this.isNormalized&&(i=i/2+.5),i},t.prototype.isPressed=function(t){return!1},t.prototype.deadzone=function(t,e){return this.minDeadzone=t,this.maxDeadzone=e,this},t.prototype.normalize=function(){return this.isNormalized=!0,this},t}(),l=function(){function t(t){this.triggerPoint=0,this.inverted=!1,this.input=t}return t.prototype.getValue=function(t){return this.input.getValue(t)*(this.inverted?-1:1)},t.prototype.isPressed=function(t){return this.getValue(t)>=this.triggerPoint},t.prototype.invert=function(){return this.inverted=!0,this},t.prototype.setTriggerPoint=function(t){return this.triggerPoint=t,this},t}(),d=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.inputs=t}return t.prototype.getValue=function(t){return this.isPressed(t)?1:0},t.prototype.isPressed=function(t){for(var e=0,n=this.inputs;e<n.length;e++){if(n[e].isPressed(t))return!0}return!1},t}(),p=function(){var t;this.NAMES=["STANDARD GAMEPAD","Microsoft X-Box 360 pad","Wireless Controller"],this.MAPPING=((t={})[i.STEERING]=new h(0).deadzone(.01,1),t[i.ACCELERATE]=new a(7),t[i.BRAKE]=new a(6),t[i.CLUTCH]=new d(new a(4),new a(5)),t[i.HANDBRAKE]=new a(0),t[i.HEADLIGHTS]=new a(2),t[i.NEUTRAL]=new a(11),t[i.DOGBOX_UP]=new l(new h(3)).setTriggerPoint(.5).invert(),t[i.DOGBOX_DOWN]=new l(new h(3)).setTriggerPoint(.5),t[i.PAUSE]=new a(9),t[i.CONFIRM]=new a(0),t)},f=function(){var t;this.NAMES=["MAYFLASH GameCube Controller Adapter"],this.MAPPING=((t={})[i.STEERING]=new h(0).deadzone(.05,.75),t[i.ACCELERATE]=new h(4).deadzone(0,.6).normalize(),t[i.BRAKE]=new h(3).deadzone(0,.6).normalize(),t[i.CLUTCH]=new a(7),t[i.HANDBRAKE]=new a(1),t[i.HEADLIGHTS]=new a(12),t[i.NEUTRAL]=new a(2),t[i.DOGBOX_UP]=new l(new h(2)).setTriggerPoint(.3).invert(),t[i.DOGBOX_DOWN]=new l(new h(2)).setTriggerPoint(.3),t[i.PAUSE]=new a(9),t[i.CONFIRM]=new a(1),t)};!function(t){var e,n,o=[],r={},s={};function c(t){o.push(t)}function u(t){var i=t;console.log(i.gamepad.id+" has connected.");for(var r=null,s=0,c=o;s<c.length;s++)for(var u=c[s],a=0,h=u.NAMES;a<h.length;a++){var l=h[a];-1!=i.gamepad.id.search(l)&&(r=u)}r?(e=i.gamepad,n=r,console.log("Controller mapping applied: "+r.NAMES[0])):alert("No controller mapping found for "+i.gamepad.id)}function a(t){var n=t;n.gamepad==e&&(e=null,console.log(n.gamepad.id+" has disconnected."))}t.init=function(){c(new p),c(new f),window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",a)},t.handleInputs=function(){if(s=r,r={},e&&(e=navigator.getGamepads()[e.index]))for(var t in i)isNaN(Number(t))||n.MAPPING[t].isPressed(e)&&(r[t]=!0)},t.isDown=function(t){return!!e&&1==r[t]},t.isPressed=function(t){return!!e&&(1==r[t]&&1!=s[t])},t.getAxes=function(t){return e?n.MAPPING[t].getValue(e):0}}(o||(o={})),s=r||(r={}),c=[],u={},s.init=function(){var t;c=[],u={},t=0,window.requestAnimationFrame((function e(n){s.dt=(n-t)/1e3,t=n,o.handleInputs(),function(){for(var t=0,e=c;t<e.length;t++)e[t].doUpdate()}(),window.requestAnimationFrame(e)}))},s.addEntity=function(t){c.push(t),t.id&&(u[t.id]=t)},s.getEntityById=function(t){return u[t]};var y,E,v,g,m,R=function(){function t(){}return t.getSource=function(){return""},t.load=function(t){},t.show=function(t){var e=this,n=document.getElementById("js--scene");n.setAttribute("template","src",this.getSource()),r.init(),n.addEventListener("DOMNodeInserted",(function(n){window.requestAnimationFrame((function(){e.load(t)}))}))},t}(),A=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=t),void 0===n&&(n=t),this.x=0,this.y=0,this.z=0,this.x=t,this.y=e,this.z=n}return t.prototype.toString=function(){return"("+this.x+","+this.y+","+this.z+")"},t.prototype.magnitude=function(){return Math.sqrt(this.magnitude2())},t.prototype.magnitude2=function(){return this.x*this.x+this.y*this.y+this.z*this.z},t.prototype.normalize=function(){return this.divNum(this.magnitude())},t.prototype.eulerAngleFromDirection=function(){return new t(Math.atan2(this.z,this.y),Math.atan2(this.x,this.z),Math.atan2(this.y,this.x))},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)},t.prototype.sub=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)},t.prototype.mul=function(e){return new t(this.x*e.x,this.y*e.y,this.z*e.z)},t.prototype.div=function(e){return new t(this.x/e.x,this.y/e.y,this.z/e.z)},t.prototype.mulNum=function(e){return new t(this.x*e,this.y*e,this.z*e)},t.prototype.divNum=function(e){return new t(this.x/e,this.y/e,this.z/e)},t.prototype.numDiv=function(e){return new t(e/this.x,e/this.y,e/this.z)},t}(),w=function(){function t(t){this.element=null,this.object3D=null,this.id=null,t&&(this.id=t,this.element=document.getElementById(t)),this.element?(this.object3D=this.element.object3D,this.position=new A(this.object3D.position.x,this.object3D.position.y,this.object3D.position.z),this.rotation=new A(this.object3D.rotation.x,this.object3D.rotation.y,this.object3D.rotation.z),this.velocity=new A(0,0,0)):(this.position=new A(0,0,0),this.rotation=new A(0,0,0),this.velocity=new A(0,0,0)),r.addEntity(this)}return t.prototype.update=function(){},t.prototype.doUpdate=function(){this.update(),this.velocity.magnitude()<.001&&(this.velocity=new A(0,0,0)),this.position=this.position.add(this.velocity.mulNum(r.dt)),this.object3D&&(this.object3D.position.x=this.position.x,this.object3D.position.y=this.position.y,this.object3D.position.z=this.position.z,this.object3D.rotation.x=this.rotation.x,this.object3D.rotation.y=this.rotation.y,this.object3D.rotation.z=this.rotation.z)},t}(),O=(y=function(t,e){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),D=function(t){function e(e){var n=t.call(this,e)||this;return n.hover=!1,n.onClickEvent=function(){},n.onHoverEnterEvent=function(){},n.onHoverLeaveEvent=function(){},n.cursor=r.getEntityById("js--cursor"),n.element?(n.element.classList.add("ui"),n.element.onclick=function(){n.click()},n.element.addEventListener("mouseenter",(function(t){n.hoverEnter()})),n.element.addEventListener("mouseleave",(function(t){n.hoverLeave()})),n):n}return O(e,t),e.prototype.hoverEnter=function(){this.cursor.hoverEntities.push(this),this.hover=!0,this.onHoverEnter(),this.onHoverEnterEvent()},e.prototype.hoverLeave=function(){var t=this.cursor.hoverEntities.indexOf(this);t>-1&&this.cursor.hoverEntities.splice(t,1),this.hover=!1,this.onHoverLeave(),this.onHoverLeaveEvent()},e.prototype.click=function(){this.onClick(),this.onClickEvent()},e.prototype.onClick=function(){},e.prototype.onHoverEnter=function(){},e.prototype.onHoverLeave=function(){},e}(w),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),T=function(t){function e(e){return t.call(this,e)||this}return _(e,t),e}(D);!function(t){t.REVERSE="R",t.NEUTRAL="N",t.FIRST="1",t.SECOND="2",t.THIRD="3",t.FOURTH="4",t.FIFTH="5"}(m||(m={}));var I,H,N=((E={})[m.REVERSE]=m.NEUTRAL,E[m.NEUTRAL]=m.FIRST,E[m.FIRST]=m.SECOND,E[m.SECOND]=m.THIRD,E[m.THIRD]=m.FOURTH,E[m.FOURTH]=m.FIFTH,E[m.FIFTH]=null,E),S=((v={})[m.REVERSE]=null,v[m.NEUTRAL]=m.REVERSE,v[m.FIRST]=m.NEUTRAL,v[m.SECOND]=m.FIRST,v[m.THIRD]=m.SECOND,v[m.FOURTH]=m.THIRD,v[m.FIFTH]=m.FOURTH,v);(g={})[m.REVERSE]=new A(.5,-.5,0),g[m.NEUTRAL]=new A(0,0,0),g[m.FIRST]=new A(-.5,.5,0),g[m.SECOND]=new A(-.5,-.5,0),g[m.THIRD]=new A(0,.5,0),g[m.FOURTH]=new A(0,-.5,0),g[m.FIFTH]=new A(-.5,.5,0);!function(t){t.HORSEPOWER_CONSTANT=5252,t.GRAVITY=9.81}(I||(I={})),function(t){t[t.REAR_WHEEL_DRIVE=0]="REAR_WHEEL_DRIVE",t[t.FRONT_WHEEL_DRIVE=1]="FRONT_WHEEL_DRIVE",t[t.FOUR_WHEEL_DRIVE=2]="FOUR_WHEEL_DRIVE"}(H||(H={}));var C,b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),M=function(t){function e(e,n){var i,o=t.call(this,e)||this;return o.isHeadlightsOn=!1,o.direction=new A,o.currentGear=m.NEUTRAL,o.acceleration=0,o.rpm=1e3,o.rearAngularVelocity=0,o.frontAngularVelocity=0,o.steeringAngle=0,o.gearIndicatorMap=((i={})[m.REVERSE]="-43 87 35",i[m.NEUTRAL]="-38 90 35",i[m.FIRST]="-33 93 35",i[m.SECOND]="-33 87 35",i[m.THIRD]="-38 93 35",i[m.FOURTH]="-38 87 35",i[m.FIFTH]="-43 93 35",i),o.simpleSpeed=0,o.velocityMultiplier=2,o.carModel=n,o.headlightLeft=document.getElementById("js--car-headlight-left"),o.headlightRight=document.getElementById("js--car-headlight-right"),o.steeringWheel=document.getElementById("js--car-steering-wheel"),o.debugText=document.getElementById("js--debug-text"),o.gearIndicator=document.getElementById("js--gear-indicator"),o.gearDisplay=document.getElementById("js--gear-display"),o.speedometerArrow=document.getElementById("js--speedometer-arrow"),o.velocity=new A(0,0,0),o.direction=new A(0,0,-1),o.setHeadlights(!1),o}return b(e,t),e.prototype.update=function(){o.isPressed(i.HEADLIGHTS)&&this.toggleHeadlights(),this.steer(),this.shift(),this.dashboard(),this.simplePhysics()},e.prototype.toggleHeadlights=function(){this.isHeadlightsOn=!this.isHeadlightsOn,this.updateHeadlights()},e.prototype.setHeadlights=function(t){this.isHeadlightsOn=t,this.updateHeadlights()},e.prototype.updateHeadlights=function(){this.headlightLeft.setAttribute("visible",""+this.isHeadlightsOn),this.headlightRight.setAttribute("visible",""+this.isHeadlightsOn)},e.prototype.dashboard=function(){var t=this.velocity.magnitude()/this.velocityMultiplier/1e3*60*60;this.speedometerArrow.object3D.rotation.z=(135-1.35*t)/180*Math.PI},e.prototype.steer=function(){this.steeringAngle=-this.carModel.maxSteeringAngle*o.getAxes(i.STEERING),this.turnSteeringWheel()},e.prototype.shift=function(){var t=o.isDown(i.CLUTCH);this.gearDisplay.setAttribute("visible",""+t),this.gearIndicator.setAttribute("visible",""+t),o.isDown(i.CLUTCH)&&(o.isPressed(i.DOGBOX_UP)&&S[this.currentGear]&&(this.currentGear=S[this.currentGear],this.updateGear()),o.isPressed(i.DOGBOX_DOWN)&&N[this.currentGear]&&(this.currentGear=N[this.currentGear],this.updateGear()))},e.prototype.updateGear=function(){var t=this.gearIndicatorMap[this.currentGear];this.gearIndicator.setAttribute("position",t)},e.prototype.turnSteeringWheel=function(){var t=o.getAxes(i.STEERING);this.steeringWheel.object3D.rotation.z=90*t/180*Math.PI},e.prototype.simplePhysics=function(){var t,e,n=((t={})[m.REVERSE]=-10,t[m.NEUTRAL]=0,t[m.FIRST]=10,t[m.SECOND]=8,t[m.THIRD]=5,t[m.FOURTH]=3,t[m.FIFTH]=1,t),s=((e={})[m.REVERSE]=1e3,e[m.NEUTRAL]=1e6,e[m.FIRST]=500,e[m.SECOND]=1e3,e[m.THIRD]=2e3,e[m.FOURTH]=3e3,e[m.FIFTH]=4e3,e),c=1/180*Math.PI;this.velocity=this.velocity.divNum(this.velocityMultiplier),this.velocity.magnitude()>0&&(this.rotation.y-=c*o.getAxes(i.STEERING));var u=n[this.currentGear]*o.getAxes(i.ACCELERATE),a=10*(o.isDown(i.HANDBRAKE)?1:o.getAxes(i.BRAKE));(o.isDown(i.CLUTCH)||o.isDown(i.HANDBRAKE))&&(u=0),0==u&&(a+=5),this.simpleSpeed+=u-a,this.simpleSpeed=Math.min(this.simpleSpeed,s[this.currentGear]),this.simpleSpeed=Math.max(this.simpleSpeed,0);var h=new A(-Math.sin(this.rotation.y),0,-Math.cos(this.rotation.y));this.velocity=h.mulNum(this.simpleSpeed*r.dt),this.velocity=this.velocity.mulNum(this.velocityMultiplier)},e.prototype.physics=function(){this.velocity.magnitude2()>0&&(this.direction=this.velocity.normalize());var t,e=this.carModel.torqueCurve(this.rpm)*o.getAxes(i.ACCELERATE)*this.carModel.gearRatios[this.currentGear]*this.carModel.differentialRatio*this.carModel.transmissionEfficiency/this.carModel.wheelRadius,n=this.velocity.mulNum(-this.carModel.dragConstant*this.velocity.magnitude()),s=this.velocity.mulNum(-this.carModel.rollingResistanceConstant),c=this.carModel.mass*I.GRAVITY,u=this.carModel.centerOfGravity.z+this.carModel.frontWheelPosition.z,a=this.carModel.centerOfGravity.z+this.carModel.rearWheelPosition.z,h=a-u,l=a/h,d=u/h*c-this.carModel.centerOfGravity.y/h*this.carModel.mass*this.acceleration,p=l*c+this.carModel.centerOfGravity.y/h*this.carModel.mass*this.acceleration;this.carModel.tyreFrictionCoefficient,this.carModel.tyreFrictionCoefficient;(this.carModel.layout==H.FRONT_WHEEL_DRIVE||this.carModel.layout==H.FOUR_WHEEL_DRIVE||(0,this.velocity.magnitude()/(2*Math.PI*this.carModel.wheelRadius)),this.carModel.layout==H.REAR_WHEEL_DRIVE||this.carModel.layout==H.FOUR_WHEEL_DRIVE||(0,this.velocity.magnitude()/(2*Math.PI*this.carModel.wheelRadius)),o.getAxes(i.BRAKE)>0)?t=this.direction.mulNum(this.carModel.brakingConstant).add(n.add(s)):t=this.direction.mulNum(e).add(n.add(s));var f=h/Math.sin(this.steeringAngle),y=this.velocity.magnitude()/f,E=this.rotation.eulerAngleFromDirection().y-this.steeringAngle,v=(this.carModel.corneringStiffness,t.divNum(this.carModel.mass));this.velocity=this.velocity.add(v.mulNum(r.dt)),this.acceleration=v.magnitude(),isNaN(y)||(this.rotation.y+=y*r.dt)},e}(w),P=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();!function(t){t[t.DAY=0]="DAY",t[t.NIGHT=1]="NIGHT"}(C||(C={}));var F=function(t){function e(n){var i=t.call(this,n)||this;return i.currentSky=C.DAY,e.skies[C.DAY]=document.getElementById("js--sky-day"),e.skies[C.NIGHT]=document.getElementById("js--sky-night"),i.currentSky=C.DAY,i.setSky(i.currentSky),i}return P(e,t),e.prototype.setSky=function(t){this.clearSky(),this.currentSky=t,e.skies[t].setAttribute("visible","true")},e.prototype.clearSky=function(){e.skies[C.DAY].setAttribute("visible","false"),e.skies[C.NIGHT].setAttribute("visible","false")},e.skies={},e}(w),L=function(){var t;this.frameModel="",this.steeringWheelModel="",this.handBrakeModel="",this.headlightPosition=new A,this.cameraPosition=new A,this.steeringWheelPosition=new A,this.dragConstant=.4257,this.brakingConstant=-1e4,this.tyreFrictionCoefficient=1.5,this.wheelRadius=.3265,this.frontWheelPosition=new A(1,.5,-1),this.rearWheelPosition=new A(1,.5,1),this.maxSteeringAngle=40/180*Math.PI,this.corneringStiffness=-5.2,this.mass=1560,this.centerOfGravity=new A(0,1,0),this.layout=H.FOUR_WHEEL_DRIVE,this.rollingResistanceConstant=12.8,this.transmissionEfficiency=.7,this.differentialRatio=3.42,this.gearRatios=((t={})[m.REVERSE]=2.9,t[m.NEUTRAL]=0,t[m.FIRST]=2.66,t[m.SECOND]=1.78,t[m.THIRD]=1.3,t[m.FOURTH]=1,t[m.FIFTH]=.74,t),this.idleRpm=1e3,this.stallRpm=1e3,this.redlineRpm=7e3,this.torqueCurve=function(t){return-3792735043e-15*t*t+.03803418803*t+254.6474359}},j=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return j(e,t),e.getSource=function(){return"scenes/simulation.html"},e.load=function(t){new M("js--car",new L).setHeadlights(!1),new F("js--sky").setSky(t)},e}(R),x=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),G=function(t){function e(e){var n=t.call(this,e)||this;return n.hoverEntities=[],n.element,n}return x(e,t),e.prototype.update=function(){o.isPressed(i.CONFIRM)&&this.click()},e.prototype.click=function(){for(var t=0,e=this.hoverEntities;t<e.length;t++){e[t].click()}},e}(w),z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),U=function(t){function e(e){var n=t.call(this,e)||this;return n.onCheckEvent=function(){},n.checked=!1,n.outline=document.getElementById(e+"-outline"),n.setChecked(!1),n}return z(e,t),e.prototype.onClick=function(){this.setChecked(!this.checked)},e.prototype.setChecked=function(t){this.checked=t,this.onCheckEvent(this.checked),this.outline&&this.outline.setAttribute("visible",this.checked+"")},e.prototype.isChecked=function(){return this.checked},e}(D),B=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return B(e,t),e.getSource=function(){return"scenes/menu.html"},e.load=function(t){new G("js--cursor");var e=new U("js--circuit-day"),n=new U("js--circuit-night");e.onCheckEvent=function(t){t?n.setChecked(!1):n.isChecked()||e.setChecked(!0)},n.onCheckEvent=function(t){t?e.setChecked(!1):e.isChecked()||n.setChecked(!0)},e.setChecked(!0),new T("js--button").onClickEvent=function(){k.show(e.isChecked()?C.DAY:C.NIGHT)}},e}(R);window.onload=function(){o.init(),V.show()}}]);