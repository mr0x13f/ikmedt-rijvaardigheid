import { ControllerInput } from "./ControllerInput";

export class ButtonInput implements ControllerInput {

    private index:number;

    constructor(index:number) {
        this.index = index;
    }

    getValue(gamepad:Gamepad): number {
        return gamepad.buttons[this.index].value;
    }

    isPressed(gamepad:Gamepad): boolean {
        return this.getValue(gamepad) > 0;
    }

}