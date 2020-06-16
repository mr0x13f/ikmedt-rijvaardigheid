import { ControllerInput } from "./ControllerInput";

export class HairTriggerInput implements ControllerInput {

    private triggerPoint = 0;
    private inverted = false;
    private input:ControllerInput;

    constructor(input:ControllerInput) {
        this.input = input;
    }

    public getValue(gamepad:Gamepad): number {
        let raw = this.input.getValue(gamepad);
        return raw * (this.inverted ? -1 : 1);
    }

    public isPressed(gamepad:Gamepad): boolean {
        return this.getValue(gamepad) >= this.triggerPoint;
    }

    public invert() {
        this.inverted = true;
        return this;
    }

    public setTriggerPoint(triggerPoint:number) {
        this.triggerPoint = triggerPoint;
        return this;
    }

}