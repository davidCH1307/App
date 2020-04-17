import Matter from 'matter-js';
import Constants from './Constants';
import Pipe from './Pipe';
import PipeTop from './PipeTop';

let pipes = 0;


export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



export const generatePipes = () => {
    let topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT/2) -100);
    let bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;

    let sizes = [topPipeHeight, bottomPipeHeight];

    if (Math.random() <0.5){
        sizes = sizes.reverse();
    }

    return sizes; 

}

export const addPipesAtLocation = (x, world, entities) => {
    let [pipe1Height, pipe2Height] = generatePipes();

    let pipeTopWidth = Constants.PIPE_WIDTH + 20;
    let pipeTopHeight = (pipeTopWidth / 205) * 95; 

    pipe1Height = pipe1Height - pipeTopHeight;

    let pipe1Top = Matter.Bodies.rectangle(
        x, 
        pipe1Height + (pipeTopHeight /2),
        pipeTopWidth,
        pipeTopHeight,
        {isStatic: true}
    );

    let pipe1 = Matter.Bodies.rectangle(
        x,
        pipe1Height/2,
        Constants.PIPE_WIDTH,
        pipe1Height,
        { isStatic: true}
    );

    pipe2Height = pipe2Height - pipeTopHeight;

    let pipe2Top = Matter.Bodies.rectangle(
        x, 
        Constants.MAX_HEIGHT - 110 - pipe2Height - (pipeTopHeight /2),
        pipeTopWidth,
        pipeTopHeight,
        {isStatic: true}
    );

    let pipe2 = Matter.Bodies.rectangle(
        x,
        Constants.MAX_HEIGHT - 45 - (pipe1Height/2),
        Constants.PIPE_WIDTH,
        pipe2Height,
        { isStatic: true}
    );

    Matter.World.add(world, [pipe1, pipe1Top, pipe2,pipe2Top]);

    entities["pipe" + (pipes + 1)] = {
        body: pipe1, renderer: Pipe
    }

    entities["pipe" + (pipes + 2)] = {
        body: pipe2, renderer: Pipe
    }

    entities["pipe" + (pipes + 1) + "Top"] = {
        body: pipe1Top, renderer: PipeTop
    }
    entities["pipe" + (pipes + 2) + "Top"] = {
        body: pipe2Top, renderer: PipeTop
    }

    pipes += 2;
}

const Physics = (entities, {touches, time}) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    let bird = entities.bird.body;

    let hadTouches = false;
    touches.filter(t => t.type === 'press' ).forEach(t => {
        if (!hadTouches){
            if(world.gravity.y === 0.0){
                world.gravity.y = 1.2;

                addPipesAtLocation(Constants.MAX_WIDTH-100, world, entities);

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