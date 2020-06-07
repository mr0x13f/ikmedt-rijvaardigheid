import { ControllerInput } from "./ControllerInput";

export class AxesInput implements ControllerInput {

    private minDeadzone:number = 0;
    private maxDeadzone:number = 1;
    private isNormalized:boolean = false;

    private index:number;

    constructor(index:number) {
        this.index = index;
    }

    getValue(gamepad:Gamepad): number {
        let raw = gamepad.axes[this.index].valueOf();
        let positive = raw > 0;
        let value = Math.abs(raw);

        // Apply deadzone
        if (value < this.minDeadzone)
            value = this.minDeadzone;
        else if (value > this.maxDeadzone)
            value = this.maxDeadzone;
        
        value = (value - this.minDeadzone) / (this.maxDeadzone - this.minDeadzone);
        value *= positive ? 1 : -1;

        // Normalize
        if (this.isNormalized)
            value = value / 2 + 0.5

        return value;
    }

    // Sets the deadzone
    public deadzone(min:number, max:number) {
        this.minDeadzone = min;
        this.maxDeadzone = max;
        return this;
    }

    // Normalizes value to act like analogue button
    // -1 to 1 => 0 to 1
    public normalize() {
        this.isNormalized = true;
        return this;
    }

}