export interface Controller {
    id: string; //Controller identifier
    mapping: Record<Controls, number>;  //Mapping for current controller.

    getControllerState(): void  //Method called for retrieving the Gamepad object.

    getButtons(): ReadonlyArray<GamepadButton>  //Method to return the state of the buttons of a controller.

    getAxes(): ReadonlyArray<number> //Method to return the state of the axes of a controller.

    getButtonIdByControls(controls: Controls): number;

}