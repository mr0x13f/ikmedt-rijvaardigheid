import { World } from "./World";
import { Car } from "./Car";
window.onload = function () {
    // Start de simulatie
    World.init();
    var car = new Car("js--car"); // Verbind een Car entity aan #js--car
};
