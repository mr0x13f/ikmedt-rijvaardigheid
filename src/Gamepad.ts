import {Controller} from "./Controller";

export module Gamepad {

    let controller:Controller | null;

    export function init() {
        controller = null;
        addGamepadListeners();
    }

    function addGamepadListeners() {
        window.addEventListener("gamepadconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            controller = new Controller(gamepadEvent.gamepad.id);
            console.log(gamepadEvent.gamepad.id + " has connected.")
        });
        window.addEventListener("gamepaddisconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            if(controller != null) { controller.disconnect(); controller = null; }
            console.log(gamepadEvent.gamepad.id + " has disconnected.");
        });
    }
}