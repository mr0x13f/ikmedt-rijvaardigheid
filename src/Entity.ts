import { World } from "./World";
import { Vector3 } from "./Vector3";

export abstract class Entity {

    public element:HTMLElement|null = null;    // Het HTML element waar de entity aan verbonden is
    public object3D:any|null = null;           // De a-frame "object3D" van het element
    public id:string|null = null               // De id van het element

    public position:Vector3;    // Positie in meters
    public rotation:Vector3;    // Rotatie in graden euler angles
    public velocity:Vector3;    // Snelheid in meters per seconde

    // Hooks voor subclasses
    public update() {}
    public init() {}

    constructor(id:string|null) {

        if (id) { // Koppelt de entity aan een bepaalde HTML element
            this.id = id;
            this.element = <HTMLElement> document.getElementById(id);
            this.object3D = (<any>this.element).object3D;

            // Pak de a-frame positie en rotatie
            this.position = new Vector3(
                this.object3D.position.x,
                this.object3D.position.y,
                this.object3D.position.z );
            this.rotation = new Vector3(
                this.object3D.rotation.x,
                this.object3D.rotation.y,
                this.object3D.rotation.z );

            this.velocity = new Vector3(0,0,0);

        } else {
            this.position = new Vector3(0,0,0);
            this.rotation = new Vector3(0,0,0);
            this.velocity = new Vector3(0,0,0);
        }

        World.addEntity(this); // Registreert deze entity in de World
        
        this.init();
    }

    // Wordt elke frame (60hz) uitgevoerd
    public doUpdate() {

        this.update(); // Update methode van subclass

        // Update de positie met de velocity
        this.position = this.position.add( this.velocity.mulNum(World.dt) );

        // Kopieer onze position en rotation naar a-frame
        this.object3D.position.x = this.position.x;
        this.object3D.position.y = this.position.y;
        this.object3D.position.z = this.position.z;
        this.object3D.rotation.x = this.rotation.x;
        this.object3D.rotation.y = this.rotation.y;
        this.object3D.rotation.z = this.rotation.z;

    }

}