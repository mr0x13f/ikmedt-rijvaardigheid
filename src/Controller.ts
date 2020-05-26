import {World} from "./World";

export class Controller {

    public gamepad: Gamepad | null;
    public axes: readonly number[] | null;
    public buttons: readonly GamepadButton[] | null;

    constructor(gp:Gamepad | null) {
        this.gamepad = gp;
        this.axes = null;
        this.buttons = null;
        if(gp != null) {
            this.axes = gp.axes
            this.buttons = gp.buttons;
        }
        World.attachController(this);

    }

    disconnect() {
        World.detachController(this);
    }

    update() {
        if(this.gamepad != null) {
            const AXES = this.gamepad.axes;
            const BUTTONS = this.gamepad.buttons;
        }
    }
}