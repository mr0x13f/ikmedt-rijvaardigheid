import { Entity } from "./Entity";
import { World } from "./World";
import { Vector3 } from "./Vector3";

export class Car extends Entity {

    public init() {

    }

    public update() {

        const SPEED = 5; // meter per seconde
        const DIRECTION = new Vector3(0,0,-1); // richting
        this.velocity = DIRECTION.mulNum(SPEED);

    }

}