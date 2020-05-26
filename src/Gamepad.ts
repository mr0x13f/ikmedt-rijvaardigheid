import {Controller} from "./Controller";

export module Gamepad {

    let gamepads = navigator.getGamepads();
    let controller:Controller | null;

    export function init() {
        controller = new Controller(gamepads[0]);
        addGamepadListeners();
    }

    function addGamepadListeners() {
        window.addEventListener("gamepadconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            controller = new Controller(gamepadEvent.gamepad);
            console.log(gamepadEvent.gamepad + " has connected.")
        });
        window.addEventListener("gamepaddisconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            if(controller != null) { controller.disconnect(); controller = null; }
            console.log(gamepadEvent.gamepad + " has disconnected.")
        });
    }
}