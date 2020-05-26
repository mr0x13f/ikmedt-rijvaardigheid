import { World } from "./World"
import { Car } from "./entities/Car";
import { Gamepad } from "./Gamepad";

window.onload = () => {

    // Initialize the gamepad API.
    Gamepad.init();
    // Start de simulatie
    World.init();

    let car:Car = new Car("js--car"); // Verbind een Car entity aan #car

}