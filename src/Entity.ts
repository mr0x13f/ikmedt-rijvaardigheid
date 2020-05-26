import { World } from "./World";

export abstract class Entity {

    public element:HTMLElement|null = null;    // Het HTML element waar de entity aan verbonden is
    public object3D:any|null = null;           // De a-frame "object3D" van het element

    constructor(id:string|null) {

        if (id) { // Koppelt de entity aan een bepaalde id
            this.element = <HTMLElement> document.getElementById(id);
            this.object3D = (<any>this.element).object3D;
        }

        World.addEntity(this); // Registreert deze entity in de World

    }

    // Wordt elke frame (60hz) uitgevoerd
    public update() {}

}