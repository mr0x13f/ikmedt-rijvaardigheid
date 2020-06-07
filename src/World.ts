import { Entity } from "./Entity";
import { Gamepad } from "./Gamepad";
import {HeadLights} from "./HeadLights";

export module World {

    export let dt:number; // De tijd in s tussen de laatste frame.
    // World.dt gebruikt worden om waardes per seconde te updaten
    // bijv 50 * World.dt wordt 50 per seconde

    let entities:Entity[] = [];          // Alle entities
    let idMap:{[id:string]:Entity} = {}; // Wordt gebruikt door getEntityById()
    let headlights: HeadLights

    export function init() {

        headlights = new HeadLights();
        entities = [];
        idMap = {};
        loop();

    }

    // Roep Entity.update() aan op alle entities
    function update() {
        headlights.checkHeadLights();

        for (let entity of entities)
            entity.doUpdate();
    }

    export function addEntity(entity:Entity) {
        entities.push(entity);

        if (entity.id)
            idMap[entity.id] = entity;
    }

    export function getEntityById(id:string): Entity {
        return idMap[id];
    }

    // Dit zorgt ervoor dat update() elke frame (bijv 60x per sec) wordt aangeroepen
    function loop(): void {
    
        let lastTime: number = 0;
    
        function run(time: number): void {
        
            dt = (time - lastTime) / 1000;
            lastTime = time;
    
            update();
    
            window.requestAnimationFrame(run);
        
        }
    
        window.requestAnimationFrame(run);
    
    }

}