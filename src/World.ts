import { Entity } from "./Entity";

export module World {

    export let dt:number; // De tijd in s tussen de laatste frame.
    // World.dt gebruikt worden om waardes per seconde te updaten
    // FOUT:  positie.x += 10
    // ^ Dit veranderd te positie met 10 per FRAME
    // Als de framerate veranderd wordt het dus langzamer
    // GOED:  positie.x += 10 * World.dt
    // ^ Dit zorgt ervoor dat het per seconde is

    let entities:Entity[]; // Alle entities

    export function init() {

        entities = [];
        loop();

    }

    // Roep Entity.update() aan op alle entities
    function update() {
        
        for (let entity of entities)
            entity.update();

    }

    export function addEntity(entity:Entity) {
        entities.push(entity);
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