import { UiEntity } from "./UiEntity";

export class Checkbox extends UiEntity {

    private outline:HTMLElement|null;

    public onCheckEvent:(checked:boolean)=>void = () => {};

    private checked:boolean = false;

    constructor(id:string) {
        super(id);

        this.outline = <HTMLElement|null> document.getElementById(id+"-outline");

        this.setChecked(false);

    }

    protected onClick() {
        this.setChecked(!this.checked);
    }

    public setChecked(checked:boolean) {
        this.checked = checked;
        this.onCheckEvent(this.checked);

        if (this.outline)
            this.outline.setAttribute("visible", this.checked+"")
    }

    public isChecked():boolean {
        return this.checked;
    }
    

}