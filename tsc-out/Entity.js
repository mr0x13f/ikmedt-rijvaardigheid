import { World } from "./World";
import { Vector3 } from "./Vector3";
var Entity = /** @class */ (function () {
    function Entity(id) {
        this.element = null; // Het HTML element waar de entity aan verbonden is
        this.object3D = null; // De a-frame "object3D" van het element
        this.id = null; // De id van het element
        if (id) { // Koppelt de entity aan een bepaalde id
            this.id = id;
            this.element = document.getElementById(id);
            this.object3D = this.element.object3D;
            // Pak de a-frame positie en rotatie
            this.position = new Vector3(this.object3D.position.x, this.object3D.position.y, this.object3D.position.z);
            this.rotation = new Vector3(this.object3D.rotation.x, this.object3D.rotation.y, this.object3D.rotation.z);
            this.velocity = new Vector3(0, 0, 0);
        }
        else {
            this.position = new Vector3(0, 0, 0);
            this.rotation = new Vector3(0, 0, 0);
            this.velocity = new Vector3(0, 0, 0);
        }
        World.addEntity(this); // Registreert deze entity in de World
    }
    // Wordt elke frame (60hz) uitgevoerd
    Entity.prototype.doUpdate = function () {
        this.update(); // Update methode van subclass
        // Update de positie met de velocity
        this.position = this.position.add(this.velocity.mulNum(World.dt));
        // Kopieer onze position en rotation naar a-frame
        this.object3D.position.x = this.position.x;
        this.object3D.position.y = this.position.y;
        this.object3D.position.z = this.position.z;
        this.object3D.rotation.x = this.rotation.x;
        this.object3D.rotation.y = this.rotation.y;
        this.object3D.rotation.z = this.rotation.z;
    };
    Entity.prototype.update = function () { };
    return Entity;
}());
export { Entity };
