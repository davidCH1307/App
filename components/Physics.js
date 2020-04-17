import Matter from 'matter-js';

const Physics = (entities, {touches, time}) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    let bird = entities.bird.body;

    let hadTouches = false;
    touches.filter(t => t.type === 'press' ).forEach(t => {
        if (!hadTouches){
            if(world.gravity.y === 0.0){
                world.gravity.y = 1.2;
            }
            hadTouches = true;
            Matter.Body.setVelocity( bird, {
                 x: bird.velocity.x,
                  y: -8.5
                });
        }
    });



    Matter.Engine.update(engine, time.delta);


    return entities; 
    }

export default Physics;