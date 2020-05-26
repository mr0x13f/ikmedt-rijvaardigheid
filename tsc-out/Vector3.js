var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // Vector3 + Vector3
    Vector3.prototype.add = function (vec) {
        return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    };
    // Vector3 - Vector3
    Vector3.prototype.sub = function (vec) {
        return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
    };
    // Vector3 * Vector3
    Vector3.prototype.mul = function (vec) {
        return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
    };
    // Vector3 / Vector3
    Vector3.prototype.div = function (vec) {
        return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
    };
    // Vector3 * number
    Vector3.prototype.mulNum = function (num) {
        return new Vector3(this.x * num, this.y * num, this.z * num);
    };
    // Vector3 / number
    Vector3.prototype.divNum = function (num) {
        return new Vector3(this.x / num, this.y / num, this.z / num);
    };
    // number / Vector3
    Vector3.prototype.numDiv = function (num) {
        return new Vector3(num / this.x, num / this.y, num / this.z);
    };
    return Vector3;
}());
export { Vector3 };
