export var World;
(function (World) {
    // World.dt gebruikt worden om waardes per seconde te updaten
    // bijv 50 * World.dt wordt 50 per seconde
    var entities = []; // Alle entities
    var idMap = {}; // Wordt gebruikt door getEntityById()
    function init() {
        loop();
    }
    World.init = init;
    // Roep Entity.update() aan op alle entities
    function update() {
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            entity.doUpdate();
        }
    }
    function addEntity(entity) {
        entities.push(entity);
        if (entity.id)
            idMap[entity.id] = entity;
    }
    World.addEntity = addEntity;
    function getEntityById(id) {
        return idMap[id];
    }
    World.getEntityById = getEntityById;
    // Dit zorgt ervoor dat update() elke frame (bijv 60x per sec) wordt aangeroepen
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
