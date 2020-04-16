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

    for (let i = 1; i <= 4; i++){
        if (entities["pipe" + i].body.position.x <= -1 * (Constants.PIPE_WIDTH / 2)){
            Matter.Body.setPosition(entities["pipe" + i].body, {x: Constants.MAX_WIDTH * 2 - (Constants.PIPE_WIDTH / 2), y: entities["pipe" + i].body.position.y})
        }else{
            Matter.Body.translate(entities["pipe" + i].body, {x: -1, y: 0 });
        }
    }


    Matter.Engine.update(engine, time.delta);


    return entities; 
    }

export default Physics;