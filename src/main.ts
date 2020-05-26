import { World } from "./World"
import { Car } from "./Car";

window.onload = () => {
    
    World.init();

    let car:Car = new Car("js--car");
    World.addEntity(car);

}