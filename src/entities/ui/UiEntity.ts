import { Cursor } from "./Cursor";
import { World } from "../../World";
import { Entity } from "../../Entity";

export abstract class UiEntity extends Entity {

    private cursor:Cursor;

    public hover:boolean = false;

    public onClickEvent:()=>void = () => {};
    public onHoverEnterEvent:()=>void = () => {};
    public onHoverLeaveEvent:()=>void = () => {};

    constructor(id:string) {
        super(id);

        this.cursor = <Cursor> World.getEntityById("js--cursor");

        if (!this.element)
            return;

        this.element.classList.add("ui");

        this.element.onclick = () => {
            this.click();
        } 
        
        this.element.addEventListener("mouseenter", (event) => {
            this.hoverEnter();
        });
        
        this.element.addEventListener("mouseleave", (event) => {
            this.hoverLeave();
        });
    }

    private hoverEnter() {
        this.cursor.hoverEntities.push(this);
        this.hover = true;

        this.onHoverEnter();
        this.onHoverEnterEvent();
    }

    private hoverLeave() {
        let index = this.cursor.hoverEntities.indexOf(this);
        if (index > -1) 
            this.cursor.hoverEntities.splice(index, 1);

        this.hover = false;

        this.onHoverLeave();
        this.onHoverLeaveEvent();
    }

    public click() {
        this.onClick();
        this.onClickEvent();
    }

    protected onClick() { }
    protected onHoverEnter() { }
    protected onHoverLeave() { }
}