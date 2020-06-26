import { Scene } from "../Scene";
import { Button } from "../entities/ui/Button";
import { SimulationScene } from "./SimulationScene";
import { Cursor } from "../entities/ui/Cursor";
import { Checkbox } from "../entities/ui/Checkbox";
import { SkyType } from "../entities/Sky";

export class MenuScene extends Scene {

    public static getSource() {
        return "scenes/menu.html";
    }

    protected static load(data:any) {

        let cursor = new Cursor("js--cursor");

        let dayCheckbox = new Checkbox("js--circuit-day");
        let nightCheckbox = new Checkbox("js--circuit-night");

        dayCheckbox.onCheckEvent = (checked:boolean) => {
            if (checked)
                nightCheckbox.setChecked(false);
            else if (!nightCheckbox.isChecked())
            dayCheckbox.setChecked(true);
        }

        nightCheckbox.onCheckEvent = (checked:boolean) => {
            if (checked)
                dayCheckbox.setChecked(false);
            else if (!dayCheckbox.isChecked())
                nightCheckbox.setChecked(true);
        }

        dayCheckbox.setChecked(true);


        let btn = new Button("js--button");
        btn.onClickEvent = () => {
            SimulationScene.show( dayCheckbox.isChecked() ? SkyType.DAY : SkyType.NIGHT );
        }
    }

}