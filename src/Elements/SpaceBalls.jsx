// For ES5 builds, import from 'pts/dist/es5'. For ES6 or custom builds, import from 'pts'.
import {World,  Body, Create, Particle, Polygon} from "pts/dist/es5"
import {PtsCanvas} from "react-pts-canvas";

/**
 * Chart example component, which extends PtsCanvas
 */
export class SpaceBalls extends PtsCanvas {

    constructor() {
      super();
      this.balls = [];
    }

    _create(space) {
        // Create world and 100 random points
      this.world = new World( space.innerBound, 1, 0 );
      this._createParticles(space);
    }

    _createParticles(space) {
      let unit = (space.size.x+space.size.y) / 150;
      let pts = Create.distributeRandom( space.innerBound, 25 );
      // Create particles and hit them with a random impulse
      for (let i=0, len=pts.length; i<len; i++) {
        let p = new Particle( pts[i] ).size(3+Math.random()*space.size.x/30 );//3+Math.random()*space.size.x/30 );
        //p.hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
        var r = Math.random()*30 + 5;
        var px = Math.random()*(space.size.x - r*2) + r;
        var py = Math.random()*(space.size.y - r*2) + r;
        p.hit( (space.size.x/2-px)/((Math.random()*20)+2), (space.size.y/2-py)/((Math.random()*20)+2) )
        this.world.add( p );
      }
      //this.world.particle( 0 ).lock = true; // lock it to move it by pointer later on

      let rect = Body.fromGroup( Polygon.rectangle( space.center, unit*50,  unit*12 ), 1 );
      this.world.add(rect);
      rect[0].lock = true;
      rect[2].lock = true;

      this.world.drawBodies( (b, i) => { 
        this.form.fillOnly(false).polygon( b ); 
      });
      this.world.drawParticles( (p, i) => {
        //let color = (i===0) ? "#fff" : "rgba(0,0,0,."+(2+i%4)+")";
        let color = "rgba(0,0,0,."+(2+i%4)+")";
        this.form.fillOnly( color ).point( p, p.radius, "circle" ); 
      });
    }

    _destroyPartilces() {
        this.world.removeBody(-1, this.world.bodyCount);
        this.world.removeParticle(-1, this.world.particleCount);
    }
  
    // Override PtsCanvas' start function
    start(bound, space) {
      this.space = space;
      this._create(space);
    }
  
    // Override PtsCanvas' resize function
    resize(size, event) {
        if (this.world) {
            this.world.bound = this.space.innerBound;
            this._destroyPartilces();
            this._createParticles(this.space);
        }
    }

    // action( type, px, py)  {
    //   if (type === "move") {
    //     this.world.particle( 0 ).position = new Pt(px, py);
    //   }
    // }
  
    // Override PtsCanvas' animate function
    animate(time, ftime) {
        // var x = Math.floor(Math.random() * Math.floor(this.world.particleCount));
        // this.world.particle(x).hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
        this.world.update( ftime );
    }
  
  }