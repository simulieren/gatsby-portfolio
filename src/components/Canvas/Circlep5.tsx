import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let X = 1
  const circles = []
  const width = 280
  const height = 320

  p.setup = () => {
    p.createCanvas(width, height)
    p.populateCircles(100)
  }

  p.populateCircles = num => {
    for (var i = 0; i < num; i++) {
      var x = rand(10, width - 10)
      var y = rand(10, height - 10)
      circles.push({
        centerX: x,
        centerY: y,
        x: x,
        y: y,
        radius: 5,
        angle: {
          inner: rand(2 * Math.PI),
          outer: rand(2 * Math.PI)
        },
        rotRadius: {
          inner: rand(10, 20),
          outer: width > height ? height / 3 : width / 3
        }
      })
    }
  }

  p.update = () => {
    p.updateCircles()
  }

  p.updateCircles = () => {
    circles.forEach(function(c) {
      c.centerX = Math.cos(c.angle.outer) * c.rotRadius.outer + width / 2
      c.centerY = Math.sin(c.angle.outer) * c.rotRadius.outer + height / 2
      c.angle.outer += 0.02

      c.x = Math.cos(c.angle.inner) * c.rotRadius.inner + c.centerX
      c.y = Math.sin(c.angle.inner) * c.rotRadius.inner + c.centerY
      c.angle.inner += 0.01
      
      // c.rotRadius.outer = Math.sin(X) * 100 + (width / 8)
      // X += 0.0005
    })
  }

  p.draw = () => {
    p.clear()
    p.update()
    p.background(0, 0, 0, 0)
    p.noFill();
    p.stroke(0,0,255)
    p.strokeWeight(2)    
    circles.forEach(function(c) {
      p.ellipse(c.x, c.y, c.radius, c.radius)
    })
  }
}

function rand(from?: number, to?: number) {
  if (to === undefined) {
    if (from === undefined) {
      return Math.random()
    } else {
      return Math.random() * from
    }
  } else {
    return Math.random() * (to - from) + from
  }
}

const Circlep5 = props => <P5Wrapper style={{width: '100%'}} sketch={sketch} />

export default Circlep5