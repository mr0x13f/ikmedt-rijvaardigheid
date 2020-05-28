import { World } from "./World";

export abstract class Scene {

    public static getSource() {
        return "";
    }

    protected static load(data:any) {}

    public static show(data?:any) {

        // Vervang de template
        let sceneElement = <any> document.getElementById("js--scene");
        sceneElement.setAttribute("template", "src", this.getSource())

        // Maak de wereld leeg
        World.init();

        // Wacht totdat de HTML is ingeladen en start dan de scene
        sceneElement.addEventListener("DOMNodeInserted", (event:any) => {
            window.requestAnimationFrame(() => {
                this.load(data); // We kunnen data meesturen als we een scene beginnen
            });
        });

    }

}