import { Entity } from "../Entity";
import { Vector3 } from "../Vector3";

export class Car extends Entity {

    private headlightLeft:HTMLElement|null=null;
    private headlightRight:HTMLElement|null=null;
    private isHeadlightsOn:boolean = false;

    constructor(id:string) {
        super(id);

        this.headlightLeft = document.getElementById("js--car-headlight-left");
        this.headlightRight = document.getElementById("js--car-headlight-right");

        document.addEventListener("keydown", (event) => {
            if (event.key == "h")
                this.toggleHeadlights();
        });

    }

    public update() {

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

        if (this.headlightLeft != null)
            this.headlightLeft.setAttribute("visible", ""+this.isHeadlightsOn);
        if (this.headlightRight != null)
            this.headlightRight.setAttribute("visible", ""+this.isHeadlightsOn);

    }

}