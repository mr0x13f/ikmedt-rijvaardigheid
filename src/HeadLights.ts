import {Gamepad} from "./Gamepad";
import {Controls} from "./Controls";

export class HeadLights {

    headlights: Controls;
    isActive: boolean;

    constructor() {
        this.headlights = Controls.HEADLIGHTS;
        this.isActive = false;
    }

    checkHeadLights() {
        if(!Gamepad.isDown(this.headlights)) {
            if (Gamepad.isPressed(this.headlights)) {
                this.isActive = !this.isActive;
                console.log("Headlight button active: " + this.isActive);
            }
        }
    }
}