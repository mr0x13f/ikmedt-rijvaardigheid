import { World } from "./World"
import { Car } from "./entities/Car";

window.onload = () => {

    // Start de simulatie
    World.init();

    let car:Car = new Car("car"); // Verbind een Car entity aan #car

}