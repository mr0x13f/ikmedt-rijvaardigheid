import { World } from "./World"
import { Car } from "./Car";

window.onload = () => {

    // Start de simulatie
    World.init();

    let car:Car = new Car("js--car"); // Verbind een Car entity aan #js--car

}