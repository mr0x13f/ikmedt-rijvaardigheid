import { ControllerInput } from "./ControllerInput";

export class ButtonInput implements ControllerInput {

    private index:number;
    private inverted:boolean = false;
    private minValue:number = 0;

    constructor(index:number) {
        this.index = index;
    }

    getValue(gamepad:Gamepad): number {
        let raw = gamepad.buttons[this.index].value;
        return raw * (this.inverted ? -1 : 1);
    }

    isPressed(gamepad:Gamepad): boolean {
        return this.getValue(gamepad) > this.minValue;
    }

    invert() {
        this.inverted = true;
    }

    setMinValue(minValue:number) {
        this.minValue = minValue;
    }

}