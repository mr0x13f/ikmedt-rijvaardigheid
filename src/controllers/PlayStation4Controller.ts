import {Controller} from "../Controller";

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
    } ;

    constructor(id: string) {
        this.id = id;

    }

    getControllerState() {
        let gamepads = navigator.getGamepads();
        for(let g in gamepads) {
            // @ts-ignore
            let gamepad = <Gamepad> g;
            if(gamepad.id == this.id) {
                return gamepad;
            }
        }
    }
}