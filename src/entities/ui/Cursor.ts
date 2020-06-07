import { Entity } from "../../Entity";
import { Gamepad } from "../../gamepad/Gamepad";
import { Controls } from "../../gamepad/Controls";
import { UiEntity } from "./UiEntity";

export class Cursor extends Entity {

    public hoverEntities:UiEntity[] = [];

    constructor(id:string) {
        super(id);

        if (!this.element)
            return;

    }

    protected update() {
        if (Gamepad.isPressed(Controls.CONFIRM))
            this.click();
    }

    public click() {
        for (let uiEntity of this.hoverEntities) 
            uiEntity.click();
    }

}