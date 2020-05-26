import {World} from "./World";

export class Controller {

    public id: string | null
    public gamepads: (Gamepad | null)[] = navigator.getGamepads();

    constructor(id: string) {
        this.id = id;
        World.attachController(this);
    }

    disconnect() {
        World.detachController(this);
    }

    updateStatus() {
        for(let g in this.gamepads) {
            // @ts-ignore
            let gamepad:Gamepad = <Gamepad> g; //Somehow believes g is a string.
            if(gamepad.id == this.id) {
                return gamepad;
            }
        }
    }

    update() {
        let gamepad = this.updateStatus()
        if(gamepad != null) {
            if(gamepad.axes[0] > 0.5) {
                console.log("rechts!");
            }
            else if(gamepad.axes[0] < -0.5) {
                console.log("links!");
            }
        }
    }
}