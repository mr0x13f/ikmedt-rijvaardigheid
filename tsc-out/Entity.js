import { World } from "./World";
var Entity = /** @class */ (function () {
    function Entity(id) {
        this.element = null; // Het HTML element waar de entity aan verbonden is
        this.object3D = null; // De a-frame "object3D" van het element
        if (id) { // Koppelt de entity aan een bepaalde id
            this.element = document.getElementById(id);
            this.object3D = this.element.object3D;
        }
        World.addEntity(this); // Registreert deze entity in de World
    }
    // Wordt elke frame (60hz) uitgevoerd
    Entity.prototype.update = function () { };
    return Entity;
}());
export { Entity };
