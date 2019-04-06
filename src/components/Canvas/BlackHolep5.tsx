import React from 'react';
// import p5, {DEGREES} from 'p5'
import P5Wrapper from 'react-p5-wrapper';

function Particle(r, theta, size, p5) {
  this.r = r;
  this.theta = theta;
  this.size = size;
  this.update = function() {
    this.r -= p5.random(0.5, 0.8) / Math.log10(this.r * 2);
    this.theta += p5.random(0.9, 1.5) / Math.log10(this.r / 5);
  };
  this.show = function() {
    p5.fill(0, 0, 255, Math.min(2 * this.r, 255));
    p5.ellipse(
      this.r * p5.sin(this.theta),
      this.r * p5.cos(this.theta),
      this.size
    );
  };
}

function sketch(p) {
  p.particles = [];
  const rotation = 0;

  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.translate(0, 0);
    p.noStroke();
    for (let i = 40; i >= 0; i--) {
      let r = i * p.random(5, 6) + 50;
      let angle = p.random(0, 360);
      for (let j = 5; j >= 0; j--) {
        r -= 0.1;
        angle += p.random(2, 9);
        p.particles.push(new Particle(r, angle, p.random(1, 5), p));
      }
    }
    p.frameRate(60);
  };

  p.draw = function() {
    p.background(100);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(0);
    p.pop();

    p.background(255);
    p.translate(0, 0);
    const r = 210;
    for (let i = p.particles.length - 1; i >= 0; i--) {
      if (p.particles[i].r < p.random(20, 25)) {
        p.particles[i].r = r;
      } else {
        p.particles[i].update();
        p.particles[i].show();
      }
    }
  };
}

const BlackHolep5 = props => <P5Wrapper sketch={sketch} />;

export default BlackHolep5;
