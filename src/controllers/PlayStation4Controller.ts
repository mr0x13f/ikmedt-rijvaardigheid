import {Controller} from "../Controller";
import {Controls} from "../Controls";
import {Axis} from "../Axis";

export class PlayStation4Controller implements Controller {
    id: string;

    mapping = {
        [Controls.ACCELERATE] : 7,
        [Controls.BRAKE] : 6,
        [Controls.CLUTCH] : 4,
        [Controls.CLUTCH] : 5,
        [Controls.HANDBRAKE] : 0,
        [Controls.HEADLIGHTS] : 2,
        [Controls.NEUTRAL] : 11
    };

    framesActive = {
        [Controls.ACCELERATE] : 0,
        [Controls.BRAKE] : 0,
        [Controls.CLUTCH] : 0,
        [Controls.CLUTCH] : 0,
        [Controls.HANDBRAKE] : 0,
        [Controls.HEADLIGHTS] : 0,
        [Controls.NEUTRAL] : 0
    };

    axis = {
        [Axis.LEFT] : [0, 1],
        [Axis.RIGHT] : [2, 3]
    };

    constructor(id: string) {
        this.id = id;
    }

    getControllerState() {
        return navigator.getGamepads()[0];
    }

    getAxis(axis: Axis): ReadonlyArray<number> {
        let position = [];
        for(let index in this.axis[axis]) {
            // @ts-ignore
            position.push(this.getControllerState().axes[index]);
        }
        return position;
    }

    getButtons(): ReadonlyArray<GamepadButton> {
        // @ts-ignore
        return this.getControllerState().buttons;
    }

    getButtonIdByControls(controls: Controls): number {
        return this.mapping[controls];
    }

    isDown(action: Controls): boolean {
        return this.framesActive[action] > 1;
    }

    incrementAction(action: Controls): void {
        this.framesActive[action] += 1;
    }


    resetAction(action: Controls): void {
        this.framesActive[action] = 0;
    }
}