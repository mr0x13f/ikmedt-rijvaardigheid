import { Entity } from "../Entity";
import { Vector3 } from "../Vector3";

export class Car extends Entity {

    private headlightLeft:HTMLElement;
    private headlightRight:HTMLElement;
    private isHeadlightsOn:boolean = false;

    constructor(id:string) {
        super(id);

        this.headlightLeft = <HTMLElement> document.getElementById("js--car-headlight-left");
        this.headlightRight = <HTMLElement> document.getElementById("js--car-headlight-right");

        document.addEventListener("keydown", (event) => {
            if (event.key == "h")
                this.toggleHeadlights();
        });

    }

    protected update() {

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