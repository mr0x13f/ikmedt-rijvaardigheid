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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\n/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ \"./tsc-out/World.js\");\n\r\nvar Scene = /** @class */ (function () {\r\n    function Scene() {\r\n    }\r\n    Scene.getSource = function () {\r\n        return \"\";\r\n    };\r\n    Scene.load = function () { };\r\n    Scene.show = function () {\r\n        var _this = this;\r\n        // Vervang de template\r\n        var sceneElement = document.getElementById(\"js--scene\");\r\n        sceneElement.setAttribute(\"template\", \"src\", this.getSource());\r\n        // Maak de wereld leeg\r\n        _World__WEBPACK_IMPORTED_MODULE_0__[\"World\"].init();\r\n        // Wacht totdat de HTML is ingeladen en start dan de scene\r\n        sceneElement.addEventListener(\"DOMNodeInserted\", function (event) {\r\n            window.requestAnimationFrame(function () {\r\n                _this.load();\r\n            });\r\n        });\r\n    };\r\n    return Scene;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Scene.js?");

/***/ }),

/***/ "./tsc-out/Vector3.js":
/*!****************************!*\
  !*** ./tsc-out/Vector3.js ***!
  \****************************/
/*! exports provided: Vector3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector3\", function() { return Vector3; });\nvar Vector3 = /** @class */ (function () {\r\n    function Vector3(x, y, z) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.z = 0;\r\n        this.x = x || 0;\r\n        this.y = y || x || 0;\r\n        this.z = z || x || 0;\r\n    }\r\n    // Vector3 + Vector3\r\n    Vector3.prototype.add = function (vec) {\r\n        return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);\r\n    };\r\n    // Vector3 - Vector3\r\n    Vector3.prototype.sub = function (vec) {\r\n        return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);\r\n    };\r\n    // Vector3 * Vector3\r\n    Vector3.prototype.mul = function (vec) {\r\n        return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);\r\n    };\r\n    // Vector3 / Vector3\r\n    Vector3.prototype.div = function (vec) {\r\n        return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);\r\n    };\r\n    // Vector3 * number\r\n    Vector3.prototype.mulNum = function (num) {\r\n        return new Vector3(this.x * num, this.y * num, this.z * num);\r\n    };\r\n    // Vector3 / number\r\n    Vector3.prototype.divNum = function (num) {\r\n        return new Vector3(this.x / num, this.y / num, this.z / num);\r\n    };\r\n    // number / Vector3\r\n    Vector3.prototype.numDiv = function (num) {\r\n        return new Vector3(num / this.x, num / this.y, num / this.z);\r\n    };\r\n    return Vector3;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/Vector3.js?");

/***/ }),

/***/ "./tsc-out/World.js":
/*!**************************!*\
  !*** ./tsc-out/World.js ***!
  \**************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\nvar World;\r\n(function (World) {\r\n    // World.dt gebruikt worden om waardes per seconde te updaten\r\n    // bijv 50 * World.dt wordt 50 per seconde\r\n    var entities = []; // Alle entities\r\n    var idMap = {}; // Wordt gebruikt door getEntityById()\r\n    function init() {\r\n        entities = [];\r\n        idMap = {};\r\n        loop();\r\n    }\r\n    World.init = init;\r\n    // Roep Entity.update() aan op alle entities\r\n    function update() {\r\n        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {\r\n            var entity = entities_1[_i];\r\n            entity.doUpdate();\r\n        }\r\n    }\r\n    function addEntity(entity) {\r\n        entities.push(entity);\r\n        if (entity.id)\r\n            idMap[entity.id] = entity;\r\n    }\r\n    World.addEntity = addEntity;\r\n    function getEntityById(id) {\r\n        return idMap[id];\r\n    }\r\n    World.getEntityById = getEntityById;\r\n    // Dit zorgt ervoor dat update() elke frame (bijv 60x per sec) wordt aangeroepen\r\n    function loop() {\r\n        var lastTime = 0;\r\n        function run(time) {\r\n            World.dt = (time - lastTime) / 1000;\r\n            lastTime = time;\r\n            update();\r\n            window.requestAnimationFrame(run);\r\n        }\r\n        window.requestAnimationFrame(run);\r\n    }\r\n})(World || (World = {}));\r\n\n\n//# sourceURL=webpack:///./tsc-out/World.js?");

/***/ }),

/***/ "./tsc-out/entities/Car.js":
/*!*********************************!*\
  !*** ./tsc-out/entities/Car.js ***!
  \*********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Car\", function() { return Car; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./tsc-out/Entity.js\");\n/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector3 */ \"./tsc-out/Vector3.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Car = /** @class */ (function (_super) {\r\n    __extends(Car, _super);\r\n    function Car(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.isHeadlightsOn = false;\r\n        _this.headlightLeft = document.getElementById(\"js--car-headlight-left\");\r\n        _this.headlightRight = document.getElementById(\"js--car-headlight-right\");\r\n        document.addEventListener(\"keydown\", function (event) {\r\n            if (event.key == \"h\")\r\n                _this.toggleHeadlights();\r\n        });\r\n        return _this;\r\n    }\r\n    Car.prototype.update = function () {\r\n        var SPEED = 5; // meter per seconde\r\n        var DIRECTION = new _Vector3__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, -1); // richting\r\n        this.velocity = DIRECTION.mulNum(SPEED);\r\n    };\r\n    Car.prototype.toggleHeadlights = function () {\r\n        this.isHeadlightsOn = !this.isHeadlightsOn;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.setHeadlights = function (enable) {\r\n        this.isHeadlightsOn = enable;\r\n        this.updateHeadlights();\r\n    };\r\n    Car.prototype.updateHeadlights = function () {\r\n        this.headlightLeft.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n        this.headlightRight.setAttribute(\"visible\", \"\" + this.isHeadlightsOn);\r\n    };\r\n    return Car;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/Car.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Entity */ \"./tsc-out/Entity.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Button = /** @class */ (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.onclick = function () { };\r\n        if (!_this.element)\r\n            return _this;\r\n        _this.element.classList.add(\"ui\");\r\n        _this.element.onclick = function () {\r\n            _this.onclick();\r\n        };\r\n        return _this;\r\n    }\r\n    return Button;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/ui/Button.js?");

/***/ }),

/***/ "./tsc-out/entities/ui/MenuCursor.js":
/*!*******************************************!*\
  !*** ./tsc-out/entities/ui/MenuCursor.js ***!
  \*******************************************/
/*! exports provided: MenuCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuCursor\", function() { return MenuCursor; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Entity */ \"./tsc-out/Entity.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar MenuCursor = /** @class */ (function (_super) {\r\n    __extends(MenuCursor, _super);\r\n    function MenuCursor(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        if (!_this.element)\r\n            return _this;\r\n        _this.element.setAttribute(\"raycaster\", \"objects\", \".ui\");\r\n        return _this;\r\n    }\r\n    MenuCursor.prototype.click = function () {\r\n        var _a;\r\n        (_a = this.element) === null || _a === void 0 ? void 0 : _a.click();\r\n    };\r\n    return MenuCursor;\r\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/entities/ui/MenuCursor.js?");

/***/ }),

/***/ "./tsc-out/main.js":
/*!*************************!*\
  !*** ./tsc-out/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/MenuScene */ \"./tsc-out/scenes/MenuScene.js\");\n\r\nwindow.onload = function () {\r\n    // Start menu scene\r\n    _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_0__[\"MenuScene\"].show();\r\n};\r\n\n\n//# sourceURL=webpack:///./tsc-out/main.js?");

/***/ }),

/***/ "./tsc-out/scenes/MenuScene.js":
/*!*************************************!*\
  !*** ./tsc-out/scenes/MenuScene.js ***!
  \*************************************/
/*! exports provided: MenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuScene\", function() { return MenuScene; });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scene */ \"./tsc-out/Scene.js\");\n/* harmony import */ var _entities_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/ui/Button */ \"./tsc-out/entities/ui/Button.js\");\n/* harmony import */ var _SimulationScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimulationScene */ \"./tsc-out/scenes/SimulationScene.js\");\n/* harmony import */ var _entities_ui_MenuCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/ui/MenuCursor */ \"./tsc-out/entities/ui/MenuCursor.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nvar MenuScene = /** @class */ (function (_super) {\r\n    __extends(MenuScene, _super);\r\n    function MenuScene() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    MenuScene.getSource = function () {\r\n        return \"scenes/menu.html\";\r\n    };\r\n    MenuScene.load = function () {\r\n        var cursor = new _entities_ui_MenuCursor__WEBPACK_IMPORTED_MODULE_3__[\"MenuCursor\"](\"js--cursor\");\r\n        var btn = new _entities_ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"](\"js--button\");\r\n        btn.onclick = function () {\r\n            _SimulationScene__WEBPACK_IMPORTED_MODULE_2__[\"SimulationScene\"].show();\r\n        };\r\n    };\r\n    return MenuScene;\r\n}(_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/scenes/MenuScene.js?");

/***/ }),

/***/ "./tsc-out/scenes/SimulationScene.js":
/*!*******************************************!*\
  !*** ./tsc-out/scenes/SimulationScene.js ***!
  \*******************************************/
/*! exports provided: SimulationScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimulationScene\", function() { return SimulationScene; });\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scene */ \"./tsc-out/Scene.js\");\n/* harmony import */ var _entities_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Car */ \"./tsc-out/entities/Car.js\");\n/* harmony import */ var _entities_Sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Sky */ \"./tsc-out/entities/Sky.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar SimulationScene = /** @class */ (function (_super) {\r\n    __extends(SimulationScene, _super);\r\n    function SimulationScene() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SimulationScene.getSource = function () {\r\n        return \"scenes/simulation.html\";\r\n    };\r\n    SimulationScene.load = function () {\r\n        var car = new _entities_Car__WEBPACK_IMPORTED_MODULE_1__[\"Car\"](\"js--car\"); // Verbind een Car entity aan #car\r\n        car.setHeadlights(false);\r\n        var sky = new _entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"Sky\"](\"js--sky\");\r\n        sky.setSky(_entities_Sky__WEBPACK_IMPORTED_MODULE_2__[\"SkyType\"].DAY);\r\n    };\r\n    return SimulationScene;\r\n}(_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./tsc-out/scenes/SimulationScene.js?");

/***/ })

/******/ });