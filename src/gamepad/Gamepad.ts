import { ControllerMapping } from "./ControllerMapping";
import { StandardGamepad } from "./controllers/StandardGamepad";
import { GameCubeMayflash } from "./controllers/GameCubeMayflash";
import { Controls } from "./Controls";

export module Gamepad {

    let controllerMappings:ControllerMapping[] = [];

    let inputBuffer:{[control in Controls]?: boolean} = {};
    let previousInputBuffer:{[control in Controls]?: boolean} = {};

    let currentGamepad:Gamepad|null;
    let currentMapping:ControllerMapping;

    export function init() {

        // Registreer alle controller mappings
        registerMapping(new StandardGamepad());
        registerMapping(new GameCubeMayflash());

        // Event listeners
        window.addEventListener("gamepadconnected", onGamepadConnected);
        window.addEventListener("gamepaddisconnected", onGamepadDisconnected);

    }

    function registerMapping(mapping:ControllerMapping) {
        controllerMappings.push(mapping);
    }

    export function handleInputs() {

        // Swap input buffers
        previousInputBuffer = inputBuffer;
        inputBuffer = {};

        if (!currentGamepad)
            return;

        currentGamepad = navigator.getGamepads()[currentGamepad.index];

        if (!currentGamepad)
            return;

        // Populate input buffer
        // (door een enum loopen is echt drie keer kut)
        for (let control in Controls)
            if (!isNaN(Number(control)))
                if (currentMapping.MAPPING[<Controls><unknown>control].isPressed(currentGamepad))
                    inputBuffer[<Controls><unknown>control] = true;
                
    }

    export function isDown(control:Controls): boolean {
        if (!currentGamepad)
            return false;

        // Button was pressed this frame
        return inputBuffer[control] == true;
    }

    export function isPressed(control:Controls): boolean {     
        if (!currentGamepad)
            return false;

        // Button was pressed this frame but not last frame
        return inputBuffer[control] == true && previousInputBuffer[control] != true;
    }

    export function getAxes(control:Controls): number {
        if (!currentGamepad)
            return 0;

        return currentMapping.MAPPING[control].getValue(currentGamepad);
    }

    function onGamepadConnected(event:Event) {
        let gamepadEvent: GamepadEvent = <GamepadEvent> event;
        console.log(gamepadEvent.gamepad.id + " has connected.")

        // Find matching controller mapping
        let mapping:ControllerMapping|null = null;
        for (let possibleMapping of controllerMappings)
            if (gamepadEvent.gamepad.id.search(possibleMapping.NAME) != -1)
                mapping = possibleMapping;

        // Deze controller heeft geen geregistreerde mapping
        if (!mapping) {
            alert("No controller mapping found for "+gamepadEvent.gamepad.id)
            return;
        }

        currentGamepad = gamepadEvent.gamepad;
        currentMapping = mapping;

        console.log("Controller mapping applied: " + mapping.NAME);
    }

    function onGamepadDisconnected(event:Event) {
        let gamepadEvent: GamepadEvent = <GamepadEvent> event;

        if (gamepadEvent.gamepad != currentGamepad)
            return; // Not the gamepad we care about

        currentGamepad = null;
        console.log(gamepadEvent.gamepad.id + " has disconnected.");
    }

    function isConnected() {
        return currentGamepad != null;
    }

}