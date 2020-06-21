export class Vector3 {

    public x:number=0;
    public y:number=0;
    public z:number=0;

    constructor(x:number=0, y:number=x, z:number=x) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    ///////////////////////////////////////////////////////////////////////
    // Methods
    ///////////////////////////////////////////////////////////////////////

    public toString(): string {
        return "("+this.x+","+this.y+","+this.z+")";
    }

    public magnitude(): number {
        return Math.sqrt(this.magnitude2());
    }

    public magnitude2(): number {
        return this.x*this.x + this.y*this.y + this.z*this.z;
    }

    public normalize(): Vector3 {
        return this.divNum(this.magnitude());
    }

    public eulerAngleFromDirection(): Vector3 {
        // This might be wrong but it doesnt really matter
        return new Vector3(
            Math.atan2(this.z, this.y),
            Math.atan2(this.x, this.z),
            Math.atan2(this.y, this.x),
        );
    }

    ///////////////////////////////////////////////////////////////////////
    // Operators
    ///////////////////////////////////////////////////////////////////////

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