import {Controller} from "./Controller";
import {PlayStation4Controller} from "./controllers/PlayStation4Controller";

export module Gamepad {

    let controller:Controller | null;

    export function init() {
        controller = null;
        addGamepadListeners();
    }

    function addGamepadListeners() {
        window.addEventListener("gamepadconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            controller = new PlayStation4Controller(gamepadEvent.gamepad.id);
            console.log(gamepadEvent.gamepad.id + " has connected.")
        });
        window.addEventListener("gamepaddisconnected", (event) => {
            let gamepadEvent: GamepadEvent = <GamepadEvent> event;
            if(controller != null) { controller = null; }
            console.log(gamepadEvent.gamepad.id + " has disconnected.");
        });
    }

    export function update() {

    }

    export function isPressed(action: Controls) {
        if(isConnected()) {
            let buttons = <ReadonlyArray<GamepadButton>> controller?.getButtons();
            let buttonId = <number> controller?.getButtonIdByControls(action);
            let isPressed = (<GamepadButton> buttons[buttonId]).value > 0 || (<GamepadButton> buttons[buttonId]).pressed;
            if(isPressed) {
                controller?.incrementAction(action);
                return isPressed;
            }
            controller?.resetAction(action);
            return isPressed;
        }
    }

    export function isDown(action: Controls) {
        if(isConnected()) {
            return controller?.isDown(action);
        }
    }

    export function getAxis(axis: Axis) {
        if(isConnected()) {
            controller?.getAxis(axis);
        }
    }


    function isConnected() {
        return controller != null;
    }
}