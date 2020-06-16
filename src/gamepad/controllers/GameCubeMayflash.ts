import {ControllerMapping} from "../ControllerMapping";
import {Controls} from "../Controls";
import { ButtonInput } from "../input/ButtonInput";
import { AxesInput } from "../input/AxesInput";
import { HairTriggerInput } from "../input/HairTriggerInput";

/*
    Button mapping for GameCube controllers
    connected with the Mayflash GameCube Controller Adapter (in PC mode)

    The joysticks only reach about 0.75, zo they have quite a low max deadzone.
    The triggers are axis that go from -1 to 1 instead of the more standard 0 to 1, so the trigger values are normalized.
*/

export class GameCubeMayflash implements ControllerMapping {

    public readonly NAME = "MAYFLASH GameCube Controller Adapter";

    public readonly MAPPING = {

        // Analogue
        [Controls.STEERING] : new AxesInput(0).deadzone(0.05, 0.75),
        [Controls.ACCELERATE] : new AxesInput(4).deadzone(0, 0.6).normalize(),
        [Controls.BRAKE] : new AxesInput(3).deadzone(0, 0.6).normalize(),

        // Digital
        [Controls.CLUTCH] : new ButtonInput(7),
        [Controls.HANDBRAKE] : new ButtonInput(1),
        [Controls.HEADLIGHTS] : new ButtonInput(12),
        [Controls.NEUTRAL] : new ButtonInput(2),
        [Controls.DOGBOX_UP] : new HairTriggerInput( new AxesInput(2) ).setTriggerPoint(0.3).invert(),
        [Controls.DOGBOX_DOWN] : new HairTriggerInput( new AxesInput(2) ).setTriggerPoint(0.3),

        // Menu
        [Controls.PAUSE] : new ButtonInput(9),
        [Controls.CONFIRM] : new ButtonInput(1),

    };

}