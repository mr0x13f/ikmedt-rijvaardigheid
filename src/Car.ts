import { Entity } from "./Entity";
import { World } from "./World";

export class Car extends Entity {

    private element:HTMLElement;
    private object3D:any;

    constructor(id:string) {
        super()

        this.element = <HTMLElement> document.getElementById(id);
        this.object3D = (<any>this.element).object3D;

    }

    public update() {

        const SPEED = 5; // meter per seconde
        this.object3D.position.z -= SPEED * World.dt;

    }

}