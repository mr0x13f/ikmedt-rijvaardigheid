/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tsc-out/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tsc-out/Entity.js":
/*!***************************!*\
  !*** ./tsc-out/Entity.js ***!
  \***************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./tsc-out/World.js\");\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector3 */ \"./tsc-out/Vector3.js\");\n\r\n\r\nvar Entity = /** @class */ (function () {\r\n    function Entity(id) {\r\n        this.element = null; // Het HTML element waar de entity aan verbonden is\r\n        this.object3D = null; // De a-frame \"object3D\" van het element\r\n        this.id = null; // De id van het element\r\n        if (id) { // Koppelt de entity aan een bepaalde HTML element\r\n            this.id = id;\r\n            this.element = document.getElementById(id);\r\n            this.object3D = this.element.object3D;\r\n            // Pak de a-frame positie en rotatie\r\n            this.position = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](this.object3D.position.x, this.object3D.position.y, this.object3D.position.z);\r\n            this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](this.object3D.rotation.x, this.object3D.rotation.y, this.object3D.rotation.z);\r\n            this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        }\r\n        else {\r\n            this.position = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n            this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n            this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        }\r\n        _World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].addEntity(this); // Registreert deze entity in de World\r\n    }\r\n    // Hooks voor subclasses\r\n    Entity.prototype.update = function () { };\r\n    // Wordt elke frame (60hz) uitgevoerd\r\n    Entity.prototype.doUpdate = function () {\r\n        this.update(); // Update methode van subclass\r\n        // Update de positie met de velocity\r\n        this.position = this.position.add(this.velocity.mulNum(_World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].dt));\r\n        // Kopieer onze position en rotation naar a-frame\r\n        this.object3D.position.x = this.position.x;\r\n        this.object3D.position.y = this.position.y;\r\n        this.object3D.position.z = this.position.z;\r\n        this.object3D.rotation.x = this.rotation.x;\r\n        this.object3D.rotation.y = this.rotation.y;\r\n        this.object3D.rotation.z = this.rotation.z;\r\n    };\r\n    return Entity;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Entity.js?");

/***/ }),

/***/ "./tsc-out/Scene.js":
/*!**************************!*\
  !*** ./tsc-out/Scene.js ***!
  \**************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./tsc-out/World.js\");\n\r\nvar Scene = /** @class */ (function () {\r\n    function Scene() {\r\n    }\r\n    Scene.getSource = function () {\r\n        return \"\";\r\n    };\r\n    Scene.load = function (data) { };\r\n    Scene.show = function (data) {\r\n        var _this = this;\r\n        // Vervang de template\r\n        var sceneElement = document.getElementById(\"js--scene\");\r\n        sceneElement.setAttribute(\"template\", \"src\", this.getSource());\r\n        // Maak de wereld leeg\r\n        _World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].init();\r\n        // Wacht totdat de HTML is ingeladen en start dan de scene\r\n        sceneElement.addEventListener(\"DOMNodeInserted\", function (event) {\r\n            window.requestAnimationFrame(function () {\r\n                _this.load(data); // We kunnen data meesturen als we een scene beginnen\r\n            });\r\n        });\r\n    };\r\n    return Scene;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Scene.js?");

/***/ }),

/***/ "./tsc-out/Vector3.js":
/*!****************************!*\
  !*** ./tsc-out/Vector3.js ***!
  \****************************/
/*! exports provided: Vector3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector3\", function() { return Vector3; });\nvar Vector3 = /** @class */ (function () {\r\n    function Vector3(x, y, z) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n        this.x = x || 0;\r\n        this.y = y || x || 0;\r\n        this.z = z || x || 0;\r\n    }\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Methods\r\n    ///////////////////////////////////////////////////////////////////////\r\n    Vector3.prototype.magnitude = function () {\r\n        return Math.sqrt(this.x * this.x + this.y + this.y);\r\n    };\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Operators\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Vector3 + Vector3\r\n    Vector3.prototype.add = function (vec) {\r\n        return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);\r\n    };\r\n    // Vector3 - Vector3\r\n    Vector3.prototype.sub = function (vec) {\r\n        return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);\r\n    };\r\n    // Vector3 * Vector3\r\n    Vector3.prototype.mul = function (vec) {\r\n        return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);\r\n    };\r\n    // Vector3 / Vector3\r\n    Vector3.prototype.div = function (vec) {\r\n        return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);\r\n    };\r\n    // Vector3 * number\r\n    Vector3.prototype.mulNum = function (num) {\r\n        return new Vector3(this.x * num, this.y * num, this.z * num);\r\n    };\r\n    // Vector3 / number\r\n    Vector3.prototype.divNum = function (num) {\r\n        return new Vector3(this.x / num, this.y / num, this.z / num);\r\n    };\r\n    // number / Vector3\r\n    Vector3.prototype.numDiv = function (num) {\r\n        return new Vector3(num / this.x, num / this.y, num / this.z);\r\n    };\r\n    return Vector3;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Vector3.js?");

/***/ }),

/***/ "./tsc-out/World.js":
/*!**************************!*\
  !*** ./tsc-out/World.js ***!
  \**************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n\r\nvar World;\r\n(function (World) {\r\n    // World.dt gebruikt worden om waardes per seconde te updaten\r\n    // bijv 50 * World.dt wordt 50 per seconde\r\n    var entities = []; // Alle entities\r\n    var idMap = {}; // Wordt gebruikt door getEntityById()\r\n    function init() {\r\n        entities = [];\r\n        idMap = {};\r\n        loop();\r\n    }\r\n    World.init = init;\r\n    // Roep Entity.update() aan op alle entities\r\n    function update() {\r\n        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {\r\n            var entity = entities_1[_i];\r\n            entity.doUpdate();\r\n        }\r\n    }\r\n    // Laat Gamepad de input buffer updaten\r\n    function handleInputs() {\r\n        _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_0__[\"Gamepad\"].handleInputs();\r\n    }\r\n    function addEntity(entity) {\r\n        entities.push(entity);\r\n        if (entity.id)\r\n            idMap[entity.id] = entity;\r\n    }\r\n    World.addEntity = addEntity;\r\n    function getEntityById(id) {\r\n        return idMap[id];\r\n    }\r\n    World.getEntityById = getEntityById;\r\n    // Dit zorgt ervoor dat update() elke frame (bijv 60x per sec) wordt aangeroepen\r\n    function loop() {\r\n        var lastTime = 0;\r\n        function run(time) {\r\n            World.dt = (time - lastTime) / 1000;\r\n            lastTime = time;\r\n            handleInputs();\r\n            update();\r\n            window.requestAnimationFrame(run);\r\n        }\r\n        window.requestAnimationFrame(run);\r\n    }\r\n})(World || (World = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/World.js?");

/***/ }),

/***/ "./tsc-out/entities/Car.js":
/*!*********************************!*\
  !*** ./tsc-out/entities/Car.js ***!
  \*********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Car\", function() { return Car; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./tsc-out/Entity.js\");\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector3 */ \"./tsc-out/Vector3.js\");\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n/* harmony import */ var _gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamepad/Controls */ \"./tsc-out/gamepad/Controls.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nvar Car = /** @class */ (function (_super) {\r\n    __extends(Car, _super);\r\n    function Car(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.DEBUG_SHOW_ANALOGUE_INPUT = false;\r\n        _this.isHeadlightsOn = false;\r\n        _this.headlightLeft = document.getElementById(\"js--car-headlight-left\");\r\n        _this.headlightRight = document.getElementById(\"js--car-headlight-right\");\r\n        _this.steeringWheel = document.getElementById(\"js--car-steering-wheel\");\r\n        _this.debugAnalogueInput = document.getElementById(\"js--debug-analogue-input\");\r\n        _this.debugAnalogueInput.setAttribute(\"visible\", \"\" + _this.DEBUG_SHOW_ANALOGUE_INPUT);\r\n        return _this;\r\n    }\r\n    Car.prototype.update = function () {\r\n        if (_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].isPressed(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].HEADLIGHTS))\r\n            this.toggleHeadlights();\r\n        this.turnSteeringWheel();\r\n        var SPEED = 0; // meter per seconde\r\n        var DIRECTION = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, -1); // richting\r\n        this.velocity = DIRECTION.mulNum(SPEED);\r\n        this.debug();\r\n    };\r\n    Car.prototype.toggleHeadlights = function () {\r\n        this.isHeadlightsOn = !this.isHeadlightsOn;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.setHeadlights = function (enable) {\r\n        this.isHeadlightsOn = enable;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.updateHeadlights = function () {\r\n        this.headlightLeft.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n        this.headlightRight.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n    };\r\n    Car.prototype.turnSteeringWheel = function () {\r\n        var axisValue = _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].STEERING);\r\n        this.steeringWheel.object3D.rotation.z = axisValue * 90 / 180 * Math.PI;\r\n    };\r\n    Car.prototype.debug = function () {\r\n        if (this.DEBUG_SHOW_ANALOGUE_INPUT) {\r\n            var steering = _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].STEERING);\r\n            var acceleration = _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].ACCELERATE);\r\n            var brake = _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].BRAKE);\r\n            this.debugAnalogueInput.setAttribute(\"value\", (steering > 0 ? \"+\" : \"\") + steering + \"\\n\" +\r\n                (acceleration > 0 ? \"+\" : \"\") + acceleration + \"\\n\" +\r\n                (brake > 0 ? \"+\" : \"\") + brake);\r\n        }\r\n    };\r\n    return Car;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/Car.js?");

/***/ }),

/***/ "./tsc-out/entities/Sky.js":
/*!*********************************!*\
  !*** ./tsc-out/entities/Sky.js ***!
  \*********************************/
/*! exports provided: SkyType, Sky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SkyType\", function() { return SkyType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sky\", function() { return Sky; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./tsc-out/Entity.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar SkyType;\r\n(function (SkyType) {\r\n    SkyType[SkyType[\"DAY\"] = 0] = \"DAY\";\r\n    SkyType[SkyType[\"NIGHT\"] = 1] = \"NIGHT\";\r\n})(SkyType || (SkyType = {}));\r\nvar Sky = /** @class */ (function (_super) {\r\n    __extends(Sky, _super);\r\n    function Sky(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.currentSky = SkyType.DAY;\r\n        // Register skies\r\n        Sky.skies[SkyType.DAY] = document.getElementById(\"js--sky-day\");\r\n        Sky.skies[SkyType.NIGHT] = document.getElementById(\"js--sky-night\");\r\n        _this.currentSky = SkyType.DAY;\r\n        _this.setSky(_this.currentSky);\r\n        return _this;\r\n    }\r\n    Sky.prototype.setSky = function (sky) {\r\n        this.clearSky();\r\n        this.currentSky = sky;\r\n        Sky.skies[sky].setAttribute(\"visible\", \"true\");\r\n    };\r\n    Sky.prototype.clearSky = function () {\r\n        Sky.skies[SkyType.DAY].setAttribute(\"visible\", \"false\");\r\n        Sky.skies[SkyType.NIGHT].setAttribute(\"visible\", \"false\");\r\n    };\r\n    Sky.skies = {};\r\n    return Sky;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/Sky.js?");

/***/ }),

/***/ "./tsc-out/entities/ui/Button.js":
/*!***************************************!*\
  !*** ./tsc-out/entities/ui/Button.js ***!
  \***************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var _UiEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UiEntity */ \"./tsc-out/entities/ui/UiEntity.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Button = /** @class */ (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(id) {\r\n        return _super.call(this, id) || this;\r\n    }\r\n    return Button;\r\n}(_UiEntity__WEBPACK_IMPORTED_MODULE_0__[\"UiEntity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/ui/Button.js?");

/***/ }),

/***/ "./tsc-out/entities/ui/Cursor.js":
/*!***************************************!*\
  !*** ./tsc-out/entities/ui/Cursor.js ***!
  \***************************************/
/*! exports provided: Cursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cursor\", function() { return Cursor; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Entity */ \"./tsc-out/Entity.js\");\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n/* harmony import */ var _gamepad_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gamepad/Controls */ \"./tsc-out/gamepad/Controls.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar Cursor = /** @class */ (function (_super) {\r\n    __extends(Cursor, _super);\r\n    function Cursor(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.hoverEntities = [];\r\n        if (!_this.element)\r\n            return _this;\r\n        return _this;\r\n    }\r\n    Cursor.prototype.update = function () {\r\n        if (_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_1__[\"Gamepad\"].isPressed(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_2__[\"Controls\"].CONFIRM))\r\n            this.click();\r\n    };\r\n    Cursor.prototype.click = function () {\r\n        for (var _i = 0, _a = this.hoverEntities; _i < _a.length; _i++) {\r\n            var uiEntity = _a[_i];\r\n            uiEntity.click();\r\n        }\r\n    };\r\n    return Cursor;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/ui/Cursor.js?");

/***/ }),

/***/ "./tsc-out/entities/ui/UiEntity.js":
/*!*****************************************!*\
  !*** ./tsc-out/entities/ui/UiEntity.js ***!
  \*****************************************/
/*! exports provided: UiEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UiEntity\", function() { return UiEntity; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../World */ \"./tsc-out/World.js\");\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Entity */ \"./tsc-out/Entity.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar UiEntity = /** @class */ (function (_super) {\r\n    __extends(UiEntity, _super);\r\n    function UiEntity(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.hover = false;\r\n        _this.onClickEvent = function () { };\r\n        _this.onHoverEnterEvent = function () { };\r\n        _this.onHoverLeaveEvent = function () { };\r\n        _this.cursor = _World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].getEntityById(\"js--cursor\");\r\n        if (!_this.element)\r\n            return _this;\r\n        _this.element.classList.add(\"ui\");\r\n        _this.element.onclick = function () {\r\n            _this.click();\r\n        };\r\n        _this.element.addEventListener(\"mouseenter\", function (event) {\r\n            _this.hoverEnter();\r\n        });\r\n        _this.element.addEventListener(\"mouseleave\", function (event) {\r\n            _this.hoverLeave();\r\n        });\r\n        return _this;\r\n    }\r\n    UiEntity.prototype.hoverEnter = function () {\r\n        this.cursor.hoverEntities.push(this);\r\n        this.hover = true;\r\n        this.onHoverEnter();\r\n        this.onHoverEnterEvent();\r\n    };\r\n    UiEntity.prototype.hoverLeave = function () {\r\n        var index = this.cursor.hoverEntities.indexOf(this);\r\n        if (index > -1)\r\n            this.cursor.hoverEntities.splice(index, 1);\r\n        this.hover = false;\r\n        this.onHoverLeave();\r\n        this.onHoverLeaveEvent();\r\n    };\r\n    UiEntity.prototype.click = function () {\r\n        this.onClick();\r\n        this.onClickEvent();\r\n    };\r\n    UiEntity.prototype.onClick = function () { };\r\n    UiEntity.prototype.onHoverEnter = function () { };\r\n    UiEntity.prototype.onHoverLeave = function () { };\r\n    return UiEntity;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_1__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/ui/UiEntity.js?");

/***/ }),

/***/ "./tsc-out/gamepad/Controls.js":
/*!*************************************!*\
  !*** ./tsc-out/gamepad/Controls.js ***!
  \*************************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nvar Controls;\r\n(function (Controls) {\r\n    // Analogue\r\n    Controls[Controls[\"ACCELERATE\"] = 0] = \"ACCELERATE\";\r\n    Controls[Controls[\"BRAKE\"] = 1] = \"BRAKE\";\r\n    Controls[Controls[\"STEERING\"] = 2] = \"STEERING\";\r\n    // Digital\r\n    Controls[Controls[\"CLUTCH\"] = 3] = \"CLUTCH\";\r\n    Controls[Controls[\"CLUTCH2\"] = 4] = \"CLUTCH2\";\r\n    Controls[Controls[\"HANDBRAKE\"] = 5] = \"HANDBRAKE\";\r\n    Controls[Controls[\"HEADLIGHTS\"] = 6] = \"HEADLIGHTS\";\r\n    Controls[Controls[\"NEUTRAL\"] = 7] = \"NEUTRAL\";\r\n    // Menu\r\n    Controls[Controls[\"PAUSE\"] = 8] = \"PAUSE\";\r\n    Controls[Controls[\"CONFIRM\"] = 9] = \"CONFIRM\";\r\n})(Controls || (Controls = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/Controls.js?");

/***/ }),

/***/ "./tsc-out/gamepad/Gamepad.js":
/*!************************************!*\
  !*** ./tsc-out/gamepad/Gamepad.js ***!
  \************************************/
/*! exports provided: Gamepad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gamepad\", function() { return Gamepad; });\n/* harmony import */ var _controllers_StandardGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/StandardGamepad */ \"./tsc-out/gamepad/controllers/StandardGamepad.js\");\n/* harmony import */ var _controllers_GameCubeMayflash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/GameCubeMayflash */ \"./tsc-out/gamepad/controllers/GameCubeMayflash.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls */ \"./tsc-out/gamepad/Controls.js\");\n\r\n\r\n\r\nvar Gamepad;\r\n(function (Gamepad) {\r\n    var controllerMappings = [];\r\n    var inputBuffer = {};\r\n    var previousInputBuffer = {};\r\n    var currentGamepad;\r\n    var currentMapping;\r\n    function init() {\r\n        // Registreer alle controller mappings\r\n        registerMapping(new _controllers_StandardGamepad__WEBPACK_IMPORTED_MODULE_0__[\"StandardGamepad\"]());\r\n        registerMapping(new _controllers_GameCubeMayflash__WEBPACK_IMPORTED_MODULE_1__[\"GameCubeMayflash\"]());\r\n        // Event listeners\r\n        window.addEventListener(\"gamepadconnected\", onGamepadConnected);\r\n        window.addEventListener(\"gamepaddisconnected\", onGamepadDisconnected);\r\n    }\r\n    Gamepad.init = init;\r\n    function registerMapping(mapping) {\r\n        controllerMappings.push(mapping);\r\n    }\r\n    function handleInputs() {\r\n        // Swap input buffers\r\n        previousInputBuffer = inputBuffer;\r\n        inputBuffer = {};\r\n        if (!currentGamepad)\r\n            return;\r\n        currentGamepad = navigator.getGamepads()[currentGamepad.index];\r\n        if (!currentGamepad)\r\n            return;\r\n        // Populate input buffer\r\n        // (door een enum loopen is echt drie keer kut)\r\n        for (var control in _Controls__WEBPACK_IMPORTED_MODULE_2__[\"Controls\"])\r\n            if (!isNaN(Number(control)))\r\n                if (currentMapping.MAPPING[control].getValue(currentGamepad) > 0)\r\n                    inputBuffer[control] = true;\r\n    }\r\n    Gamepad.handleInputs = handleInputs;\r\n    function isDown(control) {\r\n        if (!currentGamepad)\r\n            return false;\r\n        // Button was pressed this frame\r\n        return inputBuffer[control] == true;\r\n    }\r\n    Gamepad.isDown = isDown;\r\n    function isPressed(control) {\r\n        if (!currentGamepad)\r\n            return false;\r\n        // Button was pressed this frame but not last frame\r\n        return inputBuffer[control] == true && previousInputBuffer[control] != true;\r\n    }\r\n    Gamepad.isPressed = isPressed;\r\n    function getAxes(control) {\r\n        if (!currentGamepad)\r\n            return 0;\r\n        return currentMapping.MAPPING[control].getValue(currentGamepad);\r\n    }\r\n    Gamepad.getAxes = getAxes;\r\n    function onGamepadConnected(event) {\r\n        var gamepadEvent = event;\r\n        console.log(gamepadEvent.gamepad.id + \" has connected.\");\r\n        // Find matching controller mapping\r\n        var mapping = null;\r\n        for (var _i = 0, controllerMappings_1 = controllerMappings; _i < controllerMappings_1.length; _i++) {\r\n            var possibleMapping = controllerMappings_1[_i];\r\n            if (gamepadEvent.gamepad.id.search(possibleMapping.NAME) != -1)\r\n                mapping = possibleMapping;\r\n        }\r\n        // Deze controller heeft geen geregistreerde mapping\r\n        if (!mapping) {\r\n            alert(\"No controller mapping found for \" + gamepadEvent.gamepad.id);\r\n            return;\r\n        }\r\n        currentGamepad = gamepadEvent.gamepad;\r\n        currentMapping = mapping;\r\n        console.log(\"Controller mapping applied: \" + mapping.NAME);\r\n    }\r\n    function onGamepadDisconnected(event) {\r\n        var gamepadEvent = event;\r\n        if (gamepadEvent.gamepad != currentGamepad)\r\n            return; // Not the gamepad we care about\r\n        currentGamepad = null;\r\n        console.log(gamepadEvent.gamepad.id + \" has disconnected.\");\r\n    }\r\n    function isConnected() {\r\n        return currentGamepad != null;\r\n    }\r\n})(Gamepad || (Gamepad = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/Gamepad.js?");

/***/ }),

/***/ "./tsc-out/gamepad/controllers/GameCubeMayflash.js":
/*!*********************************************************!*\
  !*** ./tsc-out/gamepad/controllers/GameCubeMayflash.js ***!
  \*********************************************************/
/*! exports provided: GameCubeMayflash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameCubeMayflash\", function() { return GameCubeMayflash; });\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls */ \"./tsc-out/gamepad/Controls.js\");\n/* harmony import */ var _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/ButtonInput */ \"./tsc-out/gamepad/input/ButtonInput.js\");\n/* harmony import */ var _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/AxesInput */ \"./tsc-out/gamepad/input/AxesInput.js\");\n\r\n\r\n\r\n/*\r\n    Button mapping for GameCube controllers\r\n    connected with the Mayflash GameCube Controller Adapter (in PC mode)\r\n\r\n    The joysticks only reach about 0.75, zo they have quite a low max deadzone.\r\n    The triggers go from -1 to 1 instead of the more standard 0 to 1, so the trigger values are normalized.\r\n*/\r\nvar GameCubeMayflash = /** @class */ (function () {\r\n    function GameCubeMayflash() {\r\n        var _a;\r\n        this.NAME = \"MAYFLASH GameCube Controller Adapter\";\r\n        this.MAPPING = (_a = {},\r\n            // Analogue\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].STEERING] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](0).deadzone(0.05, 0.75),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].ACCELERATE] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](4).deadzone(0, 0.6).normalize(),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].BRAKE] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](3).deadzone(0, 0.6).normalize(),\r\n            // Digital\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](7),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH2] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](7),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HANDBRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](1),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HEADLIGHTS] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](12),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].NEUTRAL] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](2),\r\n            // Menu\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].PAUSE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](9),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CONFIRM] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](1),\r\n            _a);\r\n    }\r\n    return GameCubeMayflash;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/controllers/GameCubeMayflash.js?");

/***/ }),

/***/ "./tsc-out/gamepad/controllers/StandardGamepad.js":
/*!********************************************************!*\
  !*** ./tsc-out/gamepad/controllers/StandardGamepad.js ***!
  \********************************************************/
/*! exports provided: StandardGamepad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StandardGamepad\", function() { return StandardGamepad; });\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls */ \"./tsc-out/gamepad/Controls.js\");\n/* harmony import */ var _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/ButtonInput */ \"./tsc-out/gamepad/input/ButtonInput.js\");\n/* harmony import */ var _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/AxesInput */ \"./tsc-out/gamepad/input/AxesInput.js\");\n\r\n\r\n\r\n/*\r\n    Button mapping for controllers marked with STANDARD GAMEPAD\r\n    These include:\r\n        Xbox 360\r\n        Xbox One\r\n        Dualshock 4\r\n        Switch Pro Controller\r\n        Switch Joy Con\r\n        Stadia Controller\r\n        NVIDIA Controller\r\n*/\r\nvar StandardGamepad = /** @class */ (function () {\r\n    function StandardGamepad() {\r\n        var _a;\r\n        this.NAME = \"STANDARD GAMEPAD\";\r\n        this.MAPPING = (_a = {},\r\n            // Analogue\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].STEERING] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](0).deadzone(0.01, 1),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].ACCELERATE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](7),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].BRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](6),\r\n            // Digital\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](4),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH2] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](5),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HANDBRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](0),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HEADLIGHTS] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](2),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].NEUTRAL] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](11),\r\n            // Menu\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].PAUSE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](9),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CONFIRM] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](0),\r\n            _a);\r\n    }\r\n    return StandardGamepad;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/controllers/StandardGamepad.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/AxesInput.js":
/*!********************************************!*\
  !*** ./tsc-out/gamepad/input/AxesInput.js ***!
  \********************************************/
/*! exports provided: AxesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AxesInput\", function() { return AxesInput; });\nvar AxesInput = /** @class */ (function () {\r\n    function AxesInput(index) {\r\n        this.minDeadzone = 0;\r\n        this.maxDeadzone = 1;\r\n        this.isNormalized = false;\r\n        this.index = index;\r\n    }\r\n    AxesInput.prototype.getValue = function (gamepad) {\r\n        var raw = gamepad.axes[this.index].valueOf();\r\n        var positive = raw > 0;\r\n        var value = Math.abs(raw);\r\n        // Apply deadzone\r\n        if (value < this.minDeadzone)\r\n            value = this.minDeadzone;\r\n        else if (value > this.maxDeadzone)\r\n            value = this.maxDeadzone;\r\n        value = (value - this.minDeadzone) / (this.maxDeadzone - this.minDeadzone);\r\n        value *= positive ? 1 : -1;\r\n        // Normalize\r\n        if (this.isNormalized)\r\n            value = value / 2 + 0.5;\r\n        return value;\r\n    };\r\n    // Sets the deadzone\r\n    AxesInput.prototype.deadzone = function (min, max) {\r\n        this.minDeadzone = min;\r\n        this.maxDeadzone = max;\r\n        return this;\r\n    };\r\n    // Normalizes value to act like analogue button\r\n    // -1 to 1 => 0 to 1\r\n    AxesInput.prototype.normalize = function () {\r\n        this.isNormalized = true;\r\n        return this;\r\n    };\r\n    return AxesInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/AxesInput.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/ButtonInput.js":
/*!**********************************************!*\
  !*** ./tsc-out/gamepad/input/ButtonInput.js ***!
  \**********************************************/
/*! exports provided: ButtonInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonInput\", function() { return ButtonInput; });\nvar ButtonInput = /** @class */ (function () {\r\n    function ButtonInput(index) {\r\n        this.index = index;\r\n    }\r\n    ButtonInput.prototype.getValue = function (gamepad) {\r\n        return gamepad.buttons[this.index].value;\r\n    };\r\n    return ButtonInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/ButtonInput.js?");

/***/ }),

/***/ "./tsc-out/main.js":
/*!*************************!*\
  !*** ./tsc-out/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/MenuScene */ \"./tsc-out/scenes/MenuScene.js\");\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n\r\n\r\nwindow.onload = function () {\r\n    _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_1__[\"Gamepad\"].init();\r\n    // Start menu scene\r\n    _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_0__[\"MenuScene\"].show();\r\n};\r\n\n\n//# sourceURL=webpack:///./tsc-out/main.js?");

/***/ }),

/***/ "./tsc-out/scenes/MenuScene.js":
/*!*************************************!*\
  !*** ./tsc-out/scenes/MenuScene.js ***!
  \*************************************/
/*! exports provided: MenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuScene\", function() { return MenuScene; });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scene */ \"./tsc-out/Scene.js\");\n/* harmony import */ var _entities_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/ui/Button */ \"./tsc-out/entities/ui/Button.js\");\n/* harmony import */ var _SimulationScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimulationScene */ \"./tsc-out/scenes/SimulationScene.js\");\n/* harmony import */ var _entities_ui_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/ui/Cursor */ \"./tsc-out/entities/ui/Cursor.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nvar MenuScene = /** @class */ (function (_super) {\r\n    __extends(MenuScene, _super);\r\n    function MenuScene() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    MenuScene.getSource = function () {\r\n        return \"scenes/menu.html\";\r\n    };\r\n    MenuScene.load = function (data) {\r\n        var cursor = new _entities_ui_Cursor__WEBPACK_IMPORTED_MODULE_3__[\"Cursor\"](\"js--cursor\");\r\n        var btn = new _entities_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"](\"js--button\");\r\n        btn.onClickEvent = function () {\r\n            _SimulationScene__WEBPACK_IMPORTED_MODULE_2__[\"SimulationScene\"].show();\r\n        };\r\n    };\r\n    return MenuScene;\r\n}(_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/scenes/MenuScene.js?");

/***/ }),

/***/ "./tsc-out/scenes/SimulationScene.js":
/*!*******************************************!*\
  !*** ./tsc-out/scenes/SimulationScene.js ***!
  \*******************************************/
/*! exports provided: SimulationScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimulationScene\", function() { return SimulationScene; });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scene */ \"./tsc-out/Scene.js\");\n/* harmony import */ var _entities_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Car */ \"./tsc-out/entities/Car.js\");\n/* harmony import */ var _entities_Sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Sky */ \"./tsc-out/entities/Sky.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar SimulationScene = /** @class */ (function (_super) {\r\n    __extends(SimulationScene, _super);\r\n    function SimulationScene() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SimulationScene.getSource = function () {\r\n        return \"scenes/simulation.html\";\r\n    };\r\n    SimulationScene.load = function (data) {\r\n        var car = new _entities_Car__WEBPACK_IMPORTED_MODULE_1__[\"Car\"](\"js--car\"); // Verbind een Car entity aan #car\r\n        car.setHeadlights(false);\r\n        var sky = new _entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"Sky\"](\"js--sky\");\r\n        sky.setSky(_entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"SkyType\"].DAY);\r\n    };\r\n    return SimulationScene;\r\n}(_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/scenes/SimulationScene.js?");

/***/ })

/******/ });