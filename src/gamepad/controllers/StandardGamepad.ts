import {ControllerMapping} from "../ControllerMapping";
import {Controls} from "../Controls";
import { ButtonInput } from "../input/ButtonInput";
import { AxesInput } from "../input/AxesInput";

/*
    Button mapping for controllers marked with STANDARD GAMEPAD
    These include:
        Xbox 360
        Xbox One
        Dualshock 4
        Switch Pro Controller
        Switch Joy Con
        Stadia Controller
        NVIDIA Controller
*/

export class StandardGamepad implements ControllerMapping {

    public readonly NAME = "STANDARD GAMEPAD";

    public readonly MAPPING = {

        // Analogue
        [Controls.STEERING] : new AxesInput(0).deadzone(0.01, 1),
        [Controls.ACCELERATE] : new ButtonInput(7),
        [Controls.BRAKE] : new ButtonInput(6),
        [Controls.SHIFTER_X] : new AxesInput(2).deadzone(0.01, 1),
        [Controls.SHIFTER_Y] : new AxesInput(3).deadzone(0.01, 1),

        // Digital
        [Controls.CLUTCH] : new ButtonInput(4),
        [Controls.CLUTCH2] : new ButtonInput(5),
        [Controls.HANDBRAKE] : new ButtonInput(0),
        [Controls.HEADLIGHTS] : new ButtonInput(2),
        [Controls.NEUTRAL] : new ButtonInput(11),

        // Menu
        [Controls.PAUSE] : new ButtonInput(9),
        [Controls.CONFIRM] : new ButtonInput(0),
        
    };

}