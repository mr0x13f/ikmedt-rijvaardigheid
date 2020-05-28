import { Entity } from "../../Entity";

export class Cursor extends Entity {

    constructor(id:string) {
        super(id);

        if (!this.element)
            return;

    }

    public click() {
        this.element?.click();
    }

}