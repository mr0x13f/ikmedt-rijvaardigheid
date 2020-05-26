var Entity = /** @class */ (function () {
    function Entity(id) {
        this.element = document.getElementById(id);
        this.object3D = this.element.object3D;
    }
    Entity.prototype.update = function () { };
    return Entity;
}());
export { Entity };
