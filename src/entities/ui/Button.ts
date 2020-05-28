import { Entity } from "../../Entity";

export class Button extends Entity {

    public onclick:()=>void = () => {};

    constructor(id:string) {
        super(id);

        if (!this.element)
            return;

        this.element.classList.add("ui");

        this.element.onclick = () => {
            this.onclick();
        }

    }

}