export interface ControllerInput {
    getValue(gamepad:Gamepad):number
    isPressed(gamepad:Gamepad):boolean
}