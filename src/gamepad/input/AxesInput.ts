import { ControllerInput } from "./ControllerInput";

export class AxesInput implements ControllerInput {

    private index:number;

    constructor(index:number) {
        this.index = index;
    }

    getValue(gamepad:Gamepad): number {
        return gamepad.axes[this.index].valueOf();
    }

}