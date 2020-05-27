import { World } from "./World"
import { Car } from "./entities/Car";
import { Sky, SkyType } from "./entities/Sky";

window.onload = () => { window.requestAnimationFrame( () => {

    // Start de simulatie
    World.init();

    let car:Car = new Car("js--car"); // Verbind een Car entity aan #car

    let sky:Sky = new Sky("js--sky");
    sky.setSky(SkyType.DAY);

})};