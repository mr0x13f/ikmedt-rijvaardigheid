import { Entity } from "./Entity";

export module World {

    export let dt:number;
    let entities:Entity[];

    export function init() {

        entities = [];
        loop();

    }

    function update() {
        
        for (let entity of entities)
            entity.update();

    }

    export function addEntity(entity:Entity) {
        entities.push(entity);
    }

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