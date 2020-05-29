import { World } from "./World"
import { MenuScene } from "./scenes/MenuScene";
import { SimulationScene } from "./scenes/SimulationScene";
import {Gamepad} from "./Gamepad";

window.onload = () => {

    Gamepad.init();
    // Start menu scene
    MenuScene.show();

};