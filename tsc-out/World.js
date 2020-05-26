export var World;
(function (World) {
    var entities;
    function init() {
        entities = [];
        loop();
    }
    World.init = init;
    function update() {
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            entity.update();
        }
    }
    function addEntity(entity) {
        entities.push(entity);
    }
    World.addEntity = addEntity;
    function loop() {
        var lastTime = 0;
        function run(time) {
            World.dt = (time - lastTime) / 1000;
            lastTime = time;
            update();
            window.requestAnimationFrame(run);
        }
        window.requestAnimationFrame(run);
    }
})(World || (World = {}));
