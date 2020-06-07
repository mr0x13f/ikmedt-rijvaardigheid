import { Entity } from "../Entity";
import { Vector3 } from "../Vector3";
import { Gamepad } from "../gamepad/Gamepad";
import { Controls } from "../gamepad/Controls";

export class Car extends Entity {

    private headlightLeft:HTMLElement;
    private headlightRight:HTMLElement;
    private isHeadlightsOn:boolean = false;

    constructor(id:string) {
        super(id);

        this.headlightLeft = <HTMLElement> document.getElementById("js--car-headlight-left");
        this.headlightRight = <HTMLElement> document.getElementById("js--car-headlight-right");

    }

    protected update() {
        
        if (Gamepad.isPressed(Controls.HEADLIGHTS))
            this.toggleHeadlights();

        const SPEED = 5; // meter per seconde
        const DIRECTION = new Vector3(0,0,-1); // richting
        this.velocity = DIRECTION.mulNum(SPEED);

    }

    public toggleHeadlights() {
        this.isHeadlightsOn = !this.isHeadlightsOn;
        this.updateHeadlights();
    }

    public setHeadlights(enable:boolean) {
        this.isHeadlightsOn = enable;
        this.updateHeadlights();
    }

    private updateHeadlights() {
        this.headlightLeft.setAttribute("visible", ""+this.isHeadlightsOn);
        this.headlightRight.setAttribute("visible", ""+this.isHeadlightsOn);
    }

}