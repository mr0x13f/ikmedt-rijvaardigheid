export abstract class Entity {

    public element:HTMLElement;
    public object3D:any;

    constructor(id:string) {
        this.element = <HTMLElement> document.getElementById(id);
        this.object3D = (<any>this.element).object3D;
    }

    public update() {}

}