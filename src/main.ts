import { MenuScene } from "./scenes/MenuScene";
import {Gamepad} from "./gamepad/Gamepad";

window.onload = () => {

    Gamepad.init();
    // Start menu scene
    MenuScene.show();

};