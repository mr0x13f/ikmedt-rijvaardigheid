import { Entity } from "../Entity";
import { Vector3 } from "../Vector3";
import { Gamepad } from "../gamepad/Gamepad";
import { Controls } from "../gamepad/Controls";

export class Car extends Entity {

    private readonly DEBUG_SHOW_ANALOGUE_INPUT = false;

    private headlightLeft:HTMLElement;
    private headlightRight:HTMLElement;
    private steeringWheel:HTMLElement;
    private debugAnalogueInput:HTMLElement;

    private isHeadlightsOn:boolean = false;

    constructor(id:string) {
        super(id);

        this.headlightLeft = <HTMLElement> document.getElementById("js--car-headlight-left");
        this.headlightRight = <HTMLElement> document.getElementById("js--car-headlight-right");
        this.steeringWheel = <HTMLElement> document.getElementById("js--car-steering-wheel");
        this.debugAnalogueInput = <HTMLElement> document.getElementById("js--debug-analogue-input");

        this.debugAnalogueInput.setAttribute("visible", ""+this.DEBUG_SHOW_ANALOGUE_INPUT);

    }

    protected update() {
        
        if (Gamepad.isPressed(Controls.HEADLIGHTS))
            this.toggleHeadlights();

        this.turnSteeringWheel();

        const SPEED = 0; // meter per seconde
        const DIRECTION = new Vector3(0,0,-1); // richting
        this.velocity = DIRECTION.mulNum(SPEED);

        this.debug();
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

    private turnSteeringWheel() {
        let axisValue = Gamepad.getAxes(Controls.STEERING);
        (<any>this.steeringWheel).object3D.rotation.z = axisValue * 90 / 180 * Math.PI;
    }

    private debug() {

        if (this.DEBUG_SHOW_ANALOGUE_INPUT) {

            let steering = Gamepad.getAxes(Controls.STEERING);
            let acceleration = Gamepad.getAxes(Controls.ACCELERATE);
            let brake = Gamepad.getAxes(Controls.BRAKE);

            (<any>this.debugAnalogueInput).setAttribute("value",
                (steering > 0 ? "+" : "") + steering + "\n" +
                (acceleration > 0 ? "+" : "") + acceleration + "\n" +
                (brake > 0 ? "+" : "") + brake
            );
        }


    }

}