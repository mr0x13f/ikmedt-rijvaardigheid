import { Scene } from "../Scene";
import { Car } from "../entities/Car";
import { Sky, SkyType } from "../entities/Sky";
import { GTRSkyline } from "../car/models/GTRSkyline";

export class SimulationScene extends Scene {

    public static getSource() {
        return "scenes/simulation.html";
    }

    protected static load(data:any) {
        
        alert("SIMULATIE BEGONNEN");

        let car:Car = new Car("js--car", new GTRSkyline()); // Verbind een Car entity aan #car
        car.setHeadlights(false);

        let sky:Sky = new Sky("js--sky");
        sky.setSky(SkyType.DAY);

    }

}