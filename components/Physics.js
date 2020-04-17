import Matter from 'matter-js';
import Constants from './Constants';

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

    Object.keys(entities).forEach(key => {
        if (key.indexOf('floor') === 0){
            if (entities[key].body.position.x <= -1 * Constants.MAX_WIDTH/ 2 ){
                Matter.Body.setPosition(entities[key].body, {x: Constants.MAX_WIDTH + (Constants.MAX_WIDTH /2), y: entities[key].body.position.y})
            }else{
                Matter.Body.translate(entities[key].body, {x: -2, y: 0});
                }
        } 
    })


    return entities; 
    }

export default Physics;