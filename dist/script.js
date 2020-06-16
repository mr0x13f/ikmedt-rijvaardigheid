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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./tsc-out/World.js\");\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector3 */ \"./tsc-out/Vector3.js\");\n\r\n\r\nvar Entity = /** @class */ (function () {\r\n    function Entity(id) {\r\n        this.element = null; // Het HTML element waar de entity aan verbonden is\r\n        this.object3D = null; // De a-frame \"object3D\" van het element\r\n        this.id = null; // De id van het element\r\n        if (id) { // Koppelt de entity aan een bepaalde HTML element\r\n            this.id = id;\r\n            this.element = document.getElementById(id);\r\n            this.object3D = this.element.object3D;\r\n            // Pak de a-frame positie en rotatie\r\n            this.position = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](this.object3D.position.x, this.object3D.position.y, this.object3D.position.z);\r\n            this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](this.object3D.rotation.x, this.object3D.rotation.y, this.object3D.rotation.z);\r\n            this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        }\r\n        else {\r\n            this.position = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n            this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n            this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        }\r\n        _World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].addEntity(this); // Registreert deze entity in de World\r\n    }\r\n    // Hooks voor subclasses\r\n    Entity.prototype.update = function () { };\r\n    // Wordt elke frame (60hz) uitgevoerd\r\n    Entity.prototype.doUpdate = function () {\r\n        this.update(); // Update methode van subclass\r\n        if (this.velocity.magnitude() < 0.001)\r\n            this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        // Update de positie met de velocity\r\n        this.position = this.position.add(this.velocity.mulNum(_World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].dt));\r\n        // Kopieer onze position en rotation naar a-frame\r\n        this.object3D.position.x = this.position.x;\r\n        this.object3D.position.y = this.position.y;\r\n        this.object3D.position.z = this.position.z;\r\n        this.object3D.rotation.x = this.rotation.x;\r\n        this.object3D.rotation.y = this.rotation.y;\r\n        this.object3D.rotation.z = this.rotation.z;\r\n    };\r\n    return Entity;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Entity.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector3\", function() { return Vector3; });\nvar Vector3 = /** @class */ (function () {\r\n    function Vector3(x, y, z) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n        this.x = x || 0;\r\n        this.y = y || x || 0;\r\n        this.z = z || x || 0;\r\n    }\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Methods\r\n    ///////////////////////////////////////////////////////////////////////\r\n    Vector3.prototype.toString = function () {\r\n        return \"(\" + this.x + \",\" + this.y + \",\" + this.z + \")\";\r\n    };\r\n    Vector3.prototype.magnitude = function () {\r\n        return Math.sqrt(this.magnitude2());\r\n    };\r\n    Vector3.prototype.magnitude2 = function () {\r\n        return this.x * this.x + this.y * this.y + this.z * this.z;\r\n    };\r\n    Vector3.prototype.normalize = function () {\r\n        return this.divNum(this.magnitude());\r\n    };\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Operators\r\n    ///////////////////////////////////////////////////////////////////////\r\n    // Vector3 + Vector3\r\n    Vector3.prototype.add = function (vec) {\r\n        return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);\r\n    };\r\n    // Vector3 - Vector3\r\n    Vector3.prototype.sub = function (vec) {\r\n        return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);\r\n    };\r\n    // Vector3 * Vector3\r\n    Vector3.prototype.mul = function (vec) {\r\n        return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);\r\n    };\r\n    // Vector3 / Vector3\r\n    Vector3.prototype.div = function (vec) {\r\n        return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);\r\n    };\r\n    // Vector3 * number\r\n    Vector3.prototype.mulNum = function (num) {\r\n        return new Vector3(this.x * num, this.y * num, this.z * num);\r\n    };\r\n    // Vector3 / number\r\n    Vector3.prototype.divNum = function (num) {\r\n        return new Vector3(this.x / num, this.y / num, this.z / num);\r\n    };\r\n    // number / Vector3\r\n    Vector3.prototype.numDiv = function (num) {\r\n        return new Vector3(num / this.x, num / this.y, num / this.z);\r\n    };\r\n    return Vector3;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Vector3.js?");

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

/***/ "./tsc-out/car/Gears.js":
/*!******************************!*\
  !*** ./tsc-out/car/Gears.js ***!
  \******************************/
/*! exports provided: Gears, nextGear, previousGear, gearPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gears\", function() { return Gears; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextGear\", function() { return nextGear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previousGear\", function() { return previousGear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gearPosition\", function() { return gearPosition; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector3 */ \"./tsc-out/Vector3.js\");\nvar _a, _b, _c;\r\n\r\nvar Gears;\r\n(function (Gears) {\r\n    Gears[\"REVERSE\"] = \"R\";\r\n    Gears[\"NEUTRAL\"] = \"N\";\r\n    Gears[\"FIRST\"] = \"1\";\r\n    Gears[\"SECOND\"] = \"2\";\r\n    Gears[\"THIRD\"] = \"3\";\r\n    Gears[\"FOURTH\"] = \"4\";\r\n    Gears[\"FIFTH\"] = \"5\";\r\n})(Gears || (Gears = {}));\r\nvar nextGear = (_a = {},\r\n    _a[Gears.REVERSE] = Gears.NEUTRAL,\r\n    _a[Gears.NEUTRAL] = Gears.FIRST,\r\n    _a[Gears.FIRST] = Gears.SECOND,\r\n    _a[Gears.SECOND] = Gears.THIRD,\r\n    _a[Gears.THIRD] = Gears.FOURTH,\r\n    _a[Gears.FOURTH] = Gears.FIFTH,\r\n    _a[Gears.FIFTH] = null,\r\n    _a);\r\nvar previousGear = (_b = {},\r\n    _b[Gears.REVERSE] = null,\r\n    _b[Gears.NEUTRAL] = Gears.REVERSE,\r\n    _b[Gears.FIRST] = Gears.NEUTRAL,\r\n    _b[Gears.SECOND] = Gears.FIRST,\r\n    _b[Gears.THIRD] = Gears.SECOND,\r\n    _b[Gears.FOURTH] = Gears.THIRD,\r\n    _b[Gears.FIFTH] = Gears.FOURTH,\r\n    _b);\r\nvar gearPosition = (_c = {},\r\n    _c[Gears.REVERSE] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0.5, -0.5, 0),\r\n    _c[Gears.NEUTRAL] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0),\r\n    _c[Gears.FIRST] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](-0.5, 0.5, 0),\r\n    _c[Gears.SECOND] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](-0.5, -0.5, 0),\r\n    _c[Gears.THIRD] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0.5, 0),\r\n    _c[Gears.FOURTH] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, -0.5, 0),\r\n    _c[Gears.FIFTH] = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](-0.5, 0.5, 0),\r\n    _c);\r\n\n\n//# sourceURL=webpack:///./tsc-out/car/Gears.js?");

/***/ }),

/***/ "./tsc-out/car/Layout.js":
/*!*******************************!*\
  !*** ./tsc-out/car/Layout.js ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\nvar Layout;\r\n(function (Layout) {\r\n    Layout[Layout[\"REAR_WHEEL_DRIVE\"] = 0] = \"REAR_WHEEL_DRIVE\";\r\n    Layout[Layout[\"FRONT_WHEEL_DRIVE\"] = 1] = \"FRONT_WHEEL_DRIVE\";\r\n    Layout[Layout[\"FOUR_WHEEL_DRIVE\"] = 2] = \"FOUR_WHEEL_DRIVE\";\r\n})(Layout || (Layout = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/car/Layout.js?");

/***/ }),

/***/ "./tsc-out/car/models/GTRSkyline.js":
/*!******************************************!*\
  !*** ./tsc-out/car/models/GTRSkyline.js ***!
  \******************************************/
/*! exports provided: GTRSkyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GTRSkyline\", function() { return GTRSkyline; });\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Vector3 */ \"./tsc-out/Vector3.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ \"./tsc-out/car/Layout.js\");\n/* harmony import */ var _Gears__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Gears */ \"./tsc-out/car/Gears.js\");\n\r\n\r\n\r\nvar GTRSkyline = /** @class */ (function () {\r\n    function GTRSkyline() {\r\n        var _a;\r\n        // Visual\r\n        this.frameModel = \"\"; // TODO\r\n        this.steeringWheelModel = \"\"; // TODO\r\n        this.handBrakeModel = \"\"; // TODO\r\n        this.headlightPosition = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        this.cameraPosition = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        this.steeringWheelPosition = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        // Physics constants\r\n        this.dragConstant = 0.4257;\r\n        this.brakingConstant = 0; // TODO\r\n        // Wheels\r\n        this.wheelRadius = 0.3265;\r\n        this.frontWheelPosition = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        this.rearWheelPosition = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        // Weight Transfer\r\n        this.mass = 1560;\r\n        this.centerOfGravity = new _Vector3__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](); // TODO\r\n        // Drivetrain\r\n        this.layout = _Layout__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].FOUR_WHEEL_DRIVE;\r\n        this.rollingResistanceConstant = 12.8;\r\n        this.transmissionEfficiency = 0.7;\r\n        this.differentialRatio = 3.42;\r\n        this.gearRatios = (_a = {},\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].REVERSE] = 2.90,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].NEUTRAL] = 0,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].FIRST] = 2.66,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].SECOND] = 1.78,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].THIRD] = 1.30,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].FOURTH] = 1,\r\n            _a[_Gears__WEBPACK_IMPORTED_MODULE_2__[\"Gears\"].FIFTH] = 0.74,\r\n            _a);\r\n        // Engine\r\n        this.idleRpm = 1000;\r\n        this.stallRpm = 1000;\r\n        this.redlineRpm = 7000;\r\n    }\r\n    GTRSkyline.prototype.torqueCurve = function (rpm) {\r\n        return -0.000003792735043 * rpm * rpm + 0.03803418803 * rpm + 254.6474359;\r\n    };\r\n    return GTRSkyline;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/car/models/GTRSkyline.js?");

/***/ }),

/***/ "./tsc-out/entities/Car.js":
/*!*********************************!*\
  !*** ./tsc-out/entities/Car.js ***!
  \*********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Car\", function() { return Car; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./tsc-out/Entity.js\");\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector3 */ \"./tsc-out/Vector3.js\");\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n/* harmony import */ var _gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamepad/Controls */ \"./tsc-out/gamepad/Controls.js\");\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../World */ \"./tsc-out/World.js\");\n/* harmony import */ var _car_Gears__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../car/Gears */ \"./tsc-out/car/Gears.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar Car = /** @class */ (function (_super) {\r\n    __extends(Car, _super);\r\n    function Car(id, carModel) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.isHeadlightsOn = false;\r\n        _this.direction = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"]();\r\n        _this.currentGear = _car_Gears__WEBPACK_IMPORTED_MODULE_5__[\"Gears\"].FIRST;\r\n        _this.carModel = carModel;\r\n        _this.headlightLeft = document.getElementById(\"js--car-headlight-left\");\r\n        _this.headlightRight = document.getElementById(\"js--car-headlight-right\");\r\n        _this.steeringWheel = document.getElementById(\"js--car-steering-wheel\");\r\n        _this.debugText = document.getElementById(\"js--debug-text\");\r\n        _this.velocity = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, 0);\r\n        _this.direction = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, -1);\r\n        _this.setHeadlights(false);\r\n        return _this;\r\n    }\r\n    Car.prototype.update = function () {\r\n        if (_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].isPressed(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].HEADLIGHTS))\r\n            this.toggleHeadlights();\r\n        this.shift();\r\n        this.physics();\r\n        this.turnSteeringWheel();\r\n    };\r\n    Car.prototype.toggleHeadlights = function () {\r\n        this.isHeadlightsOn = !this.isHeadlightsOn;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.setHeadlights = function (enable) {\r\n        this.isHeadlightsOn = enable;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.updateHeadlights = function () {\r\n        this.headlightLeft.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n        this.headlightRight.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n    };\r\n    Car.prototype.shift = function () {\r\n        if (!_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].isDown(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].CLUTCH))\r\n            return;\r\n        if (_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].isPressed(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].DOGBOX_UP) && _car_Gears__WEBPACK_IMPORTED_MODULE_5__[\"previousGear\"][this.currentGear]) {\r\n            this.currentGear = _car_Gears__WEBPACK_IMPORTED_MODULE_5__[\"previousGear\"][this.currentGear];\r\n            this.updateGear();\r\n        }\r\n        if (_gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].isPressed(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].DOGBOX_DOWN) && _car_Gears__WEBPACK_IMPORTED_MODULE_5__[\"nextGear\"][this.currentGear]) {\r\n            this.currentGear = _car_Gears__WEBPACK_IMPORTED_MODULE_5__[\"nextGear\"][this.currentGear];\r\n            this.updateGear();\r\n        }\r\n    };\r\n    Car.prototype.updateGear = function () {\r\n        console.log(this.currentGear);\r\n    };\r\n    Car.prototype.turnSteeringWheel = function () {\r\n        var axisValue = _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].STEERING);\r\n        this.steeringWheel.object3D.rotation.z = axisValue * 90 / 180 * Math.PI;\r\n    };\r\n    // https://asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html\r\n    Car.prototype.physics = function () {\r\n        if (this.velocity.magnitude2() > 0)\r\n            this.direction = this.velocity.normalize();\r\n        var rpm = 1000;\r\n        var maxTorque = this.carModel.torqueCurve(rpm);\r\n        var engineTorque = maxTorque * _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_2__[\"Gamepad\"].getAxes(_gamepad_Controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"].ACCELERATE);\r\n        var driveTorque = engineTorque * this.carModel.gearRatios[this.currentGear] * this.carModel.differentialRatio * this.carModel.transmissionEfficiency;\r\n        var driveForce = driveTorque / this.carModel.wheelRadius;\r\n        var drag = this.velocity.mulNum(-this.carModel.dragConstant * this.velocity.magnitude());\r\n        var rollingResistance = this.velocity.mulNum(-this.carModel.rollingResistanceConstant);\r\n        var longtitudinalForce = drag.add(rollingResistance);\r\n        /*\r\n        let brakes = Gamepad.getAxes(Controls.BRAKE);\r\n        if (brakes > 0 && velocity is not reduced to zero) {\r\n\r\n            let brakingForce = this.direction.mulNum(this.carModel.brakingConstant);\r\n            longtitudinalForce = longtitudinalForce.add(brakingForce);\r\n            \r\n        } else {\r\n        */\r\n        var traction = this.direction.mulNum(driveForce);\r\n        longtitudinalForce = longtitudinalForce.add(traction);\r\n        //}\r\n        this.velocity = this.velocity.add(longtitudinalForce.mulNum(_World__WEBPACK_IMPORTED_MODULE_4__[\"World\"].dt).divNum(this.carModel.mass));\r\n        this.debugText.setAttribute(\"value\", \"\" +\r\n            this.velocity.magnitude() + \"\\nkm/h\");\r\n    };\r\n    return Car;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/Car.js?");

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

/***/ "./tsc-out/gamepad/Controls.js":
/*!*************************************!*\
  !*** ./tsc-out/gamepad/Controls.js ***!
  \*************************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nvar Controls;\r\n(function (Controls) {\r\n    // Analogue\r\n    Controls[Controls[\"ACCELERATE\"] = 0] = \"ACCELERATE\";\r\n    Controls[Controls[\"BRAKE\"] = 1] = \"BRAKE\";\r\n    Controls[Controls[\"STEERING\"] = 2] = \"STEERING\";\r\n    Controls[Controls[\"SHIFTER_X\"] = 3] = \"SHIFTER_X\";\r\n    Controls[Controls[\"SHIFTER_Y\"] = 4] = \"SHIFTER_Y\";\r\n    // Digital\r\n    Controls[Controls[\"CLUTCH\"] = 5] = \"CLUTCH\";\r\n    Controls[Controls[\"HANDBRAKE\"] = 6] = \"HANDBRAKE\";\r\n    Controls[Controls[\"HEADLIGHTS\"] = 7] = \"HEADLIGHTS\";\r\n    Controls[Controls[\"NEUTRAL\"] = 8] = \"NEUTRAL\";\r\n    Controls[Controls[\"DOGBOX_UP\"] = 9] = \"DOGBOX_UP\";\r\n    Controls[Controls[\"DOGBOX_DOWN\"] = 10] = \"DOGBOX_DOWN\";\r\n    // Menu\r\n    Controls[Controls[\"PAUSE\"] = 11] = \"PAUSE\";\r\n    Controls[Controls[\"CONFIRM\"] = 12] = \"CONFIRM\";\r\n})(Controls || (Controls = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/Controls.js?");

/***/ }),

/***/ "./tsc-out/gamepad/Gamepad.js":
/*!************************************!*\
  !*** ./tsc-out/gamepad/Gamepad.js ***!
  \************************************/
/*! exports provided: Gamepad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gamepad\", function() { return Gamepad; });\n/* harmony import */ var _controllers_StandardGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/StandardGamepad */ \"./tsc-out/gamepad/controllers/StandardGamepad.js\");\n/* harmony import */ var _controllers_GameCubeMayflash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/GameCubeMayflash */ \"./tsc-out/gamepad/controllers/GameCubeMayflash.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls */ \"./tsc-out/gamepad/Controls.js\");\n\r\n\r\n\r\nvar Gamepad;\r\n(function (Gamepad) {\r\n    var controllerMappings = [];\r\n    var inputBuffer = {};\r\n    var previousInputBuffer = {};\r\n    var currentGamepad;\r\n    var currentMapping;\r\n    function init() {\r\n        // Registreer alle controller mappings\r\n        registerMapping(new _controllers_StandardGamepad__WEBPACK_IMPORTED_MODULE_0__[\"StandardGamepad\"]());\r\n        registerMapping(new _controllers_GameCubeMayflash__WEBPACK_IMPORTED_MODULE_1__[\"GameCubeMayflash\"]());\r\n        // Event listeners\r\n        window.addEventListener(\"gamepadconnected\", onGamepadConnected);\r\n        window.addEventListener(\"gamepaddisconnected\", onGamepadDisconnected);\r\n    }\r\n    Gamepad.init = init;\r\n    function registerMapping(mapping) {\r\n        controllerMappings.push(mapping);\r\n    }\r\n    function handleInputs() {\r\n        // Swap input buffers\r\n        previousInputBuffer = inputBuffer;\r\n        inputBuffer = {};\r\n        if (!currentGamepad)\r\n            return;\r\n        currentGamepad = navigator.getGamepads()[currentGamepad.index];\r\n        if (!currentGamepad)\r\n            return;\r\n        // Populate input buffer\r\n        // (door een enum loopen is echt drie keer kut)\r\n        for (var control in _Controls__WEBPACK_IMPORTED_MODULE_2__[\"Controls\"])\r\n            if (!isNaN(Number(control)))\r\n                if (currentMapping.MAPPING[control].isPressed(currentGamepad))\r\n                    inputBuffer[control] = true;\r\n    }\r\n    Gamepad.handleInputs = handleInputs;\r\n    function isDown(control) {\r\n        if (!currentGamepad)\r\n            return false;\r\n        // Button was pressed this frame\r\n        return inputBuffer[control] == true;\r\n    }\r\n    Gamepad.isDown = isDown;\r\n    function isPressed(control) {\r\n        if (!currentGamepad)\r\n            return false;\r\n        // Button was pressed this frame but not last frame\r\n        return inputBuffer[control] == true && previousInputBuffer[control] != true;\r\n    }\r\n    Gamepad.isPressed = isPressed;\r\n    function getAxes(control) {\r\n        if (!currentGamepad)\r\n            return 0;\r\n        return currentMapping.MAPPING[control].getValue(currentGamepad);\r\n    }\r\n    Gamepad.getAxes = getAxes;\r\n    function onGamepadConnected(event) {\r\n        var gamepadEvent = event;\r\n        console.log(gamepadEvent.gamepad.id + \" has connected.\");\r\n        // Find matching controller mapping\r\n        var mapping = null;\r\n        for (var _i = 0, controllerMappings_1 = controllerMappings; _i < controllerMappings_1.length; _i++) {\r\n            var possibleMapping = controllerMappings_1[_i];\r\n            if (gamepadEvent.gamepad.id.search(possibleMapping.NAME) != -1)\r\n                mapping = possibleMapping;\r\n        }\r\n        // Deze controller heeft geen geregistreerde mapping\r\n        if (!mapping) {\r\n            alert(\"No controller mapping found for \" + gamepadEvent.gamepad.id);\r\n            return;\r\n        }\r\n        currentGamepad = gamepadEvent.gamepad;\r\n        currentMapping = mapping;\r\n        console.log(\"Controller mapping applied: \" + mapping.NAME);\r\n    }\r\n    function onGamepadDisconnected(event) {\r\n        var gamepadEvent = event;\r\n        if (gamepadEvent.gamepad != currentGamepad)\r\n            return; // Not the gamepad we care about\r\n        currentGamepad = null;\r\n        console.log(gamepadEvent.gamepad.id + \" has disconnected.\");\r\n    }\r\n    function isConnected() {\r\n        return currentGamepad != null;\r\n    }\r\n})(Gamepad || (Gamepad = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/Gamepad.js?");

/***/ }),

/***/ "./tsc-out/gamepad/controllers/GameCubeMayflash.js":
/*!*********************************************************!*\
  !*** ./tsc-out/gamepad/controllers/GameCubeMayflash.js ***!
  \*********************************************************/
/*! exports provided: GameCubeMayflash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameCubeMayflash\", function() { return GameCubeMayflash; });\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls */ \"./tsc-out/gamepad/Controls.js\");\n/* harmony import */ var _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/ButtonInput */ \"./tsc-out/gamepad/input/ButtonInput.js\");\n/* harmony import */ var _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/AxesInput */ \"./tsc-out/gamepad/input/AxesInput.js\");\n/* harmony import */ var _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/HairTriggerInput */ \"./tsc-out/gamepad/input/HairTriggerInput.js\");\n\r\n\r\n\r\n\r\n/*\r\n    Button mapping for GameCube controllers\r\n    connected with the Mayflash GameCube Controller Adapter (in PC mode)\r\n\r\n    The joysticks only reach about 0.75, zo they have quite a low max deadzone.\r\n    The triggers are axis that go from -1 to 1 instead of the more standard 0 to 1, so the trigger values are normalized.\r\n*/\r\nvar GameCubeMayflash = /** @class */ (function () {\r\n    function GameCubeMayflash() {\r\n        var _a;\r\n        this.NAME = \"MAYFLASH GameCube Controller Adapter\";\r\n        this.MAPPING = (_a = {},\r\n            // Analogue\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].STEERING] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](0).deadzone(0.05, 0.75),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].ACCELERATE] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](4).deadzone(0, 0.6).normalize(),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].BRAKE] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](3).deadzone(0, 0.6).normalize(),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].SHIFTER_X] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](5).deadzone(0.05, 0.75),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].SHIFTER_Y] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](2).deadzone(0.05, 0.75),\r\n            // Digital\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](7),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HANDBRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](1),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HEADLIGHTS] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](12),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].NEUTRAL] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](2),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].DOGBOX_UP] = new _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__[\"HairTriggerInput\"](new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](2)).setTriggerPoint(0.3).invert(),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].DOGBOX_DOWN] = new _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__[\"HairTriggerInput\"](new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](2)).setTriggerPoint(0.3),\r\n            // Menu\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].PAUSE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](9),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CONFIRM] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](1),\r\n            _a);\r\n    }\r\n    return GameCubeMayflash;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/controllers/GameCubeMayflash.js?");

/***/ }),

/***/ "./tsc-out/gamepad/controllers/StandardGamepad.js":
/*!********************************************************!*\
  !*** ./tsc-out/gamepad/controllers/StandardGamepad.js ***!
  \********************************************************/
/*! exports provided: StandardGamepad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StandardGamepad\", function() { return StandardGamepad; });\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controls */ \"./tsc-out/gamepad/Controls.js\");\n/* harmony import */ var _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/ButtonInput */ \"./tsc-out/gamepad/input/ButtonInput.js\");\n/* harmony import */ var _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/AxesInput */ \"./tsc-out/gamepad/input/AxesInput.js\");\n/* harmony import */ var _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/HairTriggerInput */ \"./tsc-out/gamepad/input/HairTriggerInput.js\");\n/* harmony import */ var _input_MultipleInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/MultipleInput */ \"./tsc-out/gamepad/input/MultipleInput.js\");\n\r\n\r\n\r\n\r\n\r\n/*\r\n    Button mapping for controllers marked with STANDARD GAMEPAD\r\n    These include:\r\n        Xbox 360\r\n        Xbox One\r\n        Dualshock 4\r\n        Switch Pro Controller\r\n        Switch Joy Con\r\n        Stadia Controller\r\n        NVIDIA Controller\r\n*/\r\nvar StandardGamepad = /** @class */ (function () {\r\n    function StandardGamepad() {\r\n        var _a;\r\n        this.NAME = \"STANDARD GAMEPAD\";\r\n        this.MAPPING = (_a = {},\r\n            // Analogue\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].STEERING] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](0).deadzone(0.01, 1),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].ACCELERATE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](7),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].BRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](6),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].SHIFTER_X] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](2).deadzone(0.01, 1),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].SHIFTER_Y] = new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](3).deadzone(0.01, 1),\r\n            // Digital\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CLUTCH] = new _input_MultipleInput__WEBPACK_IMPORTED_MODULE_4__[\"MultipleInput\"](new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](4), new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](5)),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HANDBRAKE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](0),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].HEADLIGHTS] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](2),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].NEUTRAL] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](11),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].DOGBOX_UP] = new _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__[\"HairTriggerInput\"](new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](3)).setTriggerPoint(0.3).invert(),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].DOGBOX_DOWN] = new _input_HairTriggerInput__WEBPACK_IMPORTED_MODULE_3__[\"HairTriggerInput\"](new _input_AxesInput__WEBPACK_IMPORTED_MODULE_2__[\"AxesInput\"](3)).setTriggerPoint(0.3),\r\n            // Menu\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].PAUSE] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](9),\r\n            _a[_Controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"].CONFIRM] = new _input_ButtonInput__WEBPACK_IMPORTED_MODULE_1__[\"ButtonInput\"](0),\r\n            _a);\r\n    }\r\n    return StandardGamepad;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/controllers/StandardGamepad.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/AxesInput.js":
/*!********************************************!*\
  !*** ./tsc-out/gamepad/input/AxesInput.js ***!
  \********************************************/
/*! exports provided: AxesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AxesInput\", function() { return AxesInput; });\nvar AxesInput = /** @class */ (function () {\r\n    function AxesInput(index) {\r\n        this.minDeadzone = 0;\r\n        this.maxDeadzone = 1;\r\n        this.isNormalized = false;\r\n        this.index = index;\r\n    }\r\n    AxesInput.prototype.getValue = function (gamepad) {\r\n        var raw = gamepad.axes[this.index].valueOf();\r\n        var positive = raw > 0;\r\n        var value = Math.abs(raw);\r\n        // Apply deadzone\r\n        if (value < this.minDeadzone)\r\n            value = this.minDeadzone;\r\n        else if (value > this.maxDeadzone)\r\n            value = this.maxDeadzone;\r\n        value = (value - this.minDeadzone) / (this.maxDeadzone - this.minDeadzone);\r\n        value *= positive ? 1 : -1;\r\n        // Normalize\r\n        if (this.isNormalized)\r\n            value = value / 2 + 0.5;\r\n        return value;\r\n    };\r\n    AxesInput.prototype.isPressed = function (gamepad) {\r\n        return false;\r\n    };\r\n    // Sets the deadzone\r\n    AxesInput.prototype.deadzone = function (min, max) {\r\n        this.minDeadzone = min;\r\n        this.maxDeadzone = max;\r\n        return this;\r\n    };\r\n    // Normalizes value to act like analogue button\r\n    // -1 to 1 => 0 to 1\r\n    AxesInput.prototype.normalize = function () {\r\n        this.isNormalized = true;\r\n        return this;\r\n    };\r\n    return AxesInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/AxesInput.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/ButtonInput.js":
/*!**********************************************!*\
  !*** ./tsc-out/gamepad/input/ButtonInput.js ***!
  \**********************************************/
/*! exports provided: ButtonInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonInput\", function() { return ButtonInput; });\nvar ButtonInput = /** @class */ (function () {\r\n    function ButtonInput(index) {\r\n        this.inverted = false;\r\n        this.minValue = 0;\r\n        this.index = index;\r\n    }\r\n    ButtonInput.prototype.getValue = function (gamepad) {\r\n        var raw = gamepad.buttons[this.index].value;\r\n        return raw * (this.inverted ? -1 : 1);\r\n    };\r\n    ButtonInput.prototype.isPressed = function (gamepad) {\r\n        return this.getValue(gamepad) > this.minValue;\r\n    };\r\n    ButtonInput.prototype.invert = function () {\r\n        this.inverted = true;\r\n    };\r\n    ButtonInput.prototype.setMinValue = function (minValue) {\r\n        this.minValue = minValue;\r\n    };\r\n    return ButtonInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/ButtonInput.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/HairTriggerInput.js":
/*!***************************************************!*\
  !*** ./tsc-out/gamepad/input/HairTriggerInput.js ***!
  \***************************************************/
/*! exports provided: HairTriggerInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HairTriggerInput\", function() { return HairTriggerInput; });\nvar HairTriggerInput = /** @class */ (function () {\r\n    function HairTriggerInput(input) {\r\n        this.triggerPoint = 0;\r\n        this.inverted = false;\r\n        this.input = input;\r\n    }\r\n    HairTriggerInput.prototype.getValue = function (gamepad) {\r\n        var raw = this.input.getValue(gamepad);\r\n        return raw * (this.inverted ? -1 : 1);\r\n    };\r\n    HairTriggerInput.prototype.isPressed = function (gamepad) {\r\n        return this.getValue(gamepad) >= this.triggerPoint;\r\n    };\r\n    HairTriggerInput.prototype.invert = function () {\r\n        this.inverted = true;\r\n        return this;\r\n    };\r\n    HairTriggerInput.prototype.setTriggerPoint = function (triggerPoint) {\r\n        this.triggerPoint = triggerPoint;\r\n        return this;\r\n    };\r\n    return HairTriggerInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/HairTriggerInput.js?");

/***/ }),

/***/ "./tsc-out/gamepad/input/MultipleInput.js":
/*!************************************************!*\
  !*** ./tsc-out/gamepad/input/MultipleInput.js ***!
  \************************************************/
/*! exports provided: MultipleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultipleInput\", function() { return MultipleInput; });\nvar MultipleInput = /** @class */ (function () {\r\n    function MultipleInput() {\r\n        var inputs = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            inputs[_i] = arguments[_i];\r\n        }\r\n        this.inputs = inputs;\r\n    }\r\n    MultipleInput.prototype.getValue = function (gamepad) {\r\n        return this.isPressed(gamepad) ? 1 : 0;\r\n    };\r\n    MultipleInput.prototype.isPressed = function (gamepad) {\r\n        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {\r\n            var input = _a[_i];\r\n            if (input.isPressed(gamepad))\r\n                return true;\r\n        }\r\n        return false;\r\n    };\r\n    return MultipleInput;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/gamepad/input/MultipleInput.js?");

/***/ }),

/***/ "./tsc-out/main.js":
/*!*************************!*\
  !*** ./tsc-out/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepad/Gamepad */ \"./tsc-out/gamepad/Gamepad.js\");\n/* harmony import */ var _scenes_SimulationScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/SimulationScene */ \"./tsc-out/scenes/SimulationScene.js\");\n\r\n\r\nwindow.onload = function () {\r\n    _gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_0__[\"Gamepad\"].init();\r\n    // Start menu scene\r\n    //MenuScene.show();\r\n    _scenes_SimulationScene__WEBPACK_IMPORTED_MODULE_1__[\"SimulationScene\"].show();\r\n};\r\n\n\n//# sourceURL=webpack:///./tsc-out/main.js?");

/***/ }),

/***/ "./tsc-out/scenes/SimulationScene.js":
/*!*******************************************!*\
  !*** ./tsc-out/scenes/SimulationScene.js ***!
  \*******************************************/
/*! exports provided: SimulationScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimulationScene\", function() { return SimulationScene; });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scene */ \"./tsc-out/Scene.js\");\n/* harmony import */ var _entities_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Car */ \"./tsc-out/entities/Car.js\");\n/* harmony import */ var _entities_Sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Sky */ \"./tsc-out/entities/Sky.js\");\n/* harmony import */ var _car_models_GTRSkyline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../car/models/GTRSkyline */ \"./tsc-out/car/models/GTRSkyline.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nvar SimulationScene = /** @class */ (function (_super) {\r\n    __extends(SimulationScene, _super);\r\n    function SimulationScene() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SimulationScene.getSource = function () {\r\n        return \"scenes/simulation.html\";\r\n    };\r\n    SimulationScene.load = function (data) {\r\n        var car = new _entities_Car__WEBPACK_IMPORTED_MODULE_1__[\"Car\"](\"js--car\", new _car_models_GTRSkyline__WEBPACK_IMPORTED_MODULE_3__[\"GTRSkyline\"]()); // Verbind een Car entity aan #car\r\n        car.setHeadlights(false);\r\n        var sky = new _entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"Sky\"](\"js--sky\");\r\n        sky.setSky(_entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"SkyType\"].DAY);\r\n    };\r\n    return SimulationScene;\r\n}(_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/scenes/SimulationScene.js?");

/***/ })

/******/ });