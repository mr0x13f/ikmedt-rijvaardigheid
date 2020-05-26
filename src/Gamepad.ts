export module Gamepad {

    let gamepads = navigator.getGamepads();

    export function init() {
        addGamepadListeners();
    }

    function addGamepadListeners() {
        window.addEventListener("gamepadconnected", (event) => {
            let gpEvent: GamepadEvent = <GamepadEvent> event;
            console.log(gpEvent + " has connected.");
        })

        window.addEventListener("gamepaddisconnected", (event) => {
            let gpEvent: GamepadEvent = <GamepadEvent> event;
            console.log(gpEvent + "has disconnected.");
        })
    }
}