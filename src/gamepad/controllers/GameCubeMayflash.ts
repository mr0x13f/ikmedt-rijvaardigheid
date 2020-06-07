import {ControllerMapping} from "../ControllerMapping";
import {Controls} from "../Controls";
import { ButtonInput } from "../input/ButtonInput";
import { AxesInput } from "../input/AxesInput";

/*
    Button mapping for GameCube controllers
    connected with the Mayflash GameCube Controller Adapter (in PC mode)
*/

export class GameCubeMayflash implements ControllerMapping {

    public readonly NAME = "MAYFLASH GameCube Controller Adapter";

    public readonly MAPPING = {

        // Analogue
        [Controls.STEERING] : new AxesInput(0),
        [Controls.ACCELERATE] : new AxesInput(4),
        [Controls.BRAKE] : new AxesInput(3),

        // Digital
        [Controls.CLUTCH] : new ButtonInput(7),
        [Controls.CLUTCH2] : new ButtonInput(7),
        [Controls.HANDBRAKE] : new ButtonInput(1),
        [Controls.HEADLIGHTS] : new ButtonInput(12),
        [Controls.NEUTRAL] : new ButtonInput(2),

        // Menu
        [Controls.PAUSE] : new ButtonInput(9),
        [Controls.CONFIRM] : new ButtonInput(1),

    };

}