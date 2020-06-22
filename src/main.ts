import { MenuScene } from "./scenes/MenuScene";
import {Gamepad} from "./gamepad/Gamepad";
import { SimulationScene } from "./scenes/SimulationScene";

window.onload = () => {

    Gamepad.init();

    // Start menu scene
    MenuScene.show();
    //SimulationScene.show();

};