import { Entity } from "./Entity";
import { World } from "./World";

export class Car extends Entity {

    public update() {

        const SPEED = 5; // meter per seconde
        this.object3D.position.z -= SPEED * World.dt;

    }

}