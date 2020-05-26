import { World } from "./World";
import { Car } from "./Car";
window.onload = function () {
    World.init();
    var car = new Car("js--car");
    World.addEntity(car);
};
