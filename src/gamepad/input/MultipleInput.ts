import { ControllerInput } from "./ControllerInput";

export class MultipleInput implements ControllerInput {

    private inputs:ControllerInput[];

    constructor(...inputs:ControllerInput[]) {
        this.inputs = inputs;
    }

    getValue(gamepad:Gamepad): number {
        return this.isPressed(gamepad) ? 1 : 0;
    }

    isPressed(gamepad:Gamepad): boolean {
        for (let input of this.inputs)
            if (input.isPressed(gamepad))
                return true;
        return false;
    }

}