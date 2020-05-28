export interface Controller {
    id: string; //Controller identifier
    mapping: Record<Controls, number>;  //Mapping for current controller.

    getControllerState(): void  //Method called in update() for retrieving the Gamepad object.

}