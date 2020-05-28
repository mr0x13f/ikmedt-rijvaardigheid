import { Entity } from "../Entity";

export enum SkyType {
    DAY,
    NIGHT
}

export class Sky extends Entity {

    private static skies:{[sky:string]:HTMLElement} = {};
    public currentSky:SkyType = SkyType.DAY;
    
    constructor(id:string) {
        super(id);

        // Register skies
        Sky.skies[SkyType.DAY] = <HTMLElement> document.getElementById("js--sky-day");
        Sky.skies[SkyType.NIGHT] = <HTMLElement> document.getElementById("js--sky-night");

        this.currentSky = SkyType.DAY;
        this.setSky(this.currentSky);

    }

    public setSky(sky:SkyType) {
        this.clearSky();
        this.currentSky = sky;
        Sky.skies[sky].setAttribute("visible", "true");
    }

    private clearSky() {
        Sky.skies[SkyType.DAY].setAttribute("visible", "false");
        Sky.skies[SkyType.NIGHT].setAttribute("visible", "false");
    }

}