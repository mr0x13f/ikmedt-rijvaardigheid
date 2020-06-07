import { UiEntity } from "./UiEntity";

export class Button extends UiEntity {

    public checked:boolean = false;

    constructor(id:string) {
        super(id);

    }

    protected onClick() {
        this.checked = !this.checked;
    }

}