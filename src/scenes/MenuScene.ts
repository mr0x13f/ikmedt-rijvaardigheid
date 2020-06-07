import { Scene } from "../Scene";
import { Button } from "../entities/ui/Button";
import { SimulationScene } from "./SimulationScene";
import { Cursor } from "../entities/ui/Cursor";

export class MenuScene extends Scene {

    public static getSource() {
        return "scenes/menu.html";
    }

    protected static load(data:any) {

        let cursor = new Cursor("js--cursor");

        let btn = new Button("js--button");
        btn.onClickEvent = () => {
            SimulationScene.show();
        }
    }

}