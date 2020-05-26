export class Vector3 {

    public x:number=0;
    public y:number=0;
    public z:number=0;

    constructor(x?:number, y?:number, z?:number) {
        this.x = x || 0;
        this.y = y || x || 0;
        this.z = z || x || 0;
    }

    // Vector3 + Vector3
    public add(vec:Vector3): Vector3 {
        return new Vector3(
            this.x + vec.x,
            this.y + vec.y,
            this.z + vec.z,
        );
    }

    // Vector3 - Vector3
    public sub(vec:Vector3): Vector3 {
        return new Vector3(
            this.x - vec.x,
            this.y - vec.y,
            this.z - vec.z,
        );
    }

    // Vector3 * Vector3
    public mul(vec:Vector3): Vector3 {
        return new Vector3(
            this.x * vec.x,
            this.y * vec.y,
            this.z * vec.z,
        );
    }

    // Vector3 / Vector3
    public div(vec:Vector3): Vector3 {
        return new Vector3(
            this.x / vec.x,
            this.y / vec.y,
            this.z / vec.z,
        );
    }

    // Vector3 * number
    public mulNum(num:number): Vector3 {
        return new Vector3(
            this.x * num,
            this.y * num,
            this.z * num,
        );
    }

    // Vector3 / number
    public divNum(num:number): Vector3 {
        return new Vector3(
            this.x / num,
            this.y / num,
            this.z / num,
        );
    }

    // number / Vector3
    public numDiv(num:number): Vector3 {
        return new Vector3(
            num / this.x,
            num / this.y,
            num / this.z,
        );
    }

}