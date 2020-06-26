import {ControllerMapping} from "../ControllerMapping";
import {Controls} from "../Controls";
import { ButtonInput } from "../input/ButtonInput";
import { AxesInput } from "../input/AxesInput";
import { HairTriggerInput } from "../input/HairTriggerInput";
import { MultipleInput } from "../input/MultipleInput";

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

    Every browser reports controller names differently, so there's a good chance some controllers won't work on some browsers.
*/

export class StandardGamepad implements ControllerMapping {

    public readonly NAMES = ["STANDARD GAMEPAD", "Microsoft X-box 360 pad", "Wireless Controller"];

    public readonly MAPPING = {

        // Analogue
        [Controls.STEERING] : new AxesInput(0).deadzone(0.01, 1),
        [Controls.ACCELERATE] : new ButtonInput(7),
        [Controls.BRAKE] : new ButtonInput(6),

        // Digital
        [Controls.CLUTCH] : new MultipleInput( new ButtonInput(4), new ButtonInput(5)),
        [Controls.HANDBRAKE] : new ButtonInput(0),
        [Controls.HEADLIGHTS] : new ButtonInput(2),
        [Controls.NEUTRAL] : new ButtonInput(11),
        [Controls.DOGBOX_UP] : new HairTriggerInput( new AxesInput(3) ).setTriggerPoint(0.5).invert(),
        [Controls.DOGBOX_DOWN] : new HairTriggerInput( new AxesInput(3) ).setTriggerPoint(0.5),

        // Menu
        [Controls.PAUSE] : new ButtonInput(9),
        [Controls.CONFIRM] : new ButtonInput(0),
        
    };

}