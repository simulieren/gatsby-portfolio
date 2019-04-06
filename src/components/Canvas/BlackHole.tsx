import React from 'react';

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.reset();
  }
  x: number = 0;
  y: number = 0;
  z: number = 0;
  xPos: number = 0;
  yPos: number = 0;
  angle: number = 0.001;

  canvasWidth: number = this.props.canvas.canvasWidth / 3 || 0;
  canvasHeight: number = this.props.canvas.canvasWidth / 3 || 0;
  smallerSize: number = this.props.canvas.canvasWidth / 3 || 0;

  reset = () => {
    this.x = 1 - Math.random() * 2;
    this.y = 1 - Math.random() * 2;
    this.z = Math.random() * -this.props.Z_RANGE;
    this.xPos = 0;
    this.yPos = 0;
    this.angle = 0.001;
  };
  getPosition = () => {
    this.x = this.x * Math.cos(this.angle) - this.y * Math.sin(this.angle);
    this.y = this.y * Math.cos(this.angle) + this.x * Math.sin(this.angle);
    this.z += this.props.Z_VELOCITY;

    this.xPos =
      ((this.canvasHeight / this.canvasWidth) * this.canvasWidth * this.x) /
        this.z +
      this.canvasWidth / 2;
    this.yPos = (this.canvasHeight * this.y) / this.z + this.canvasHeight / 2;

    // Detect collision with black hole
    if (
      Math.sqrt(
        (this.xPos - this.props.HOLE.x) * (this.xPos - this.props.HOLE.x) +
          (this.yPos - this.props.HOLE.y) * (this.yPos - this.props.HOLE.y)
      ) <= this.props.HOLE.r ||
      this.z >= this.props.Z_RANGE
    )
      this.reset();
  };
  draw() {
    const size = 3 - -this.z / 2;
    this.props.ctx.globalAlpha =
      (this.props.Z_RANGE + this.z) / (this.props.Z_RANGE * 2);
    this.props.ctx.fillStyle = `#00f`;
    this.props.ctx.fillRect(this.xPos, this.yPos, size, size);
    this.props.ctx.globalAlpha = 1;
  }
}

class BlackHole extends React.Component {
  constructor(props) {
    super(props);
  }

  canvas: HTMLCanvasElement;
  ctx: any = null;
  canvasAnimationFrame: any = null;

  canvasWidth: number = 0;
  canvasHeight: number = 0;
  smallerSize: number = 0;

  Z_RANGE: number = this.props.Z_RANGE || 100; // How deep is your love
  Z_VELOCITY: number = this.props.Z_VELOCITY || -0.0055; // How fast
  STARS_COUNT: number = this.props.STARS_COUNT || 100; // How many

  stars = new Array(this.STARS_COUNT);

  HOLE = {
    x: this.canvasWidth / 2,
    y: this.canvasHeight / 2,
    r: this.smallerSize / 4,
  };

  setSizes = () => {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.canvasWidth = Math.floor(width);
    this.canvasHeight = Math.floor(height);
    this.smallerSize =
      this.canvasWidth > this.canvasHeight
        ? this.canvasHeight
        : this.canvasWidth;
  };

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.fillStyle = `#00f`;
    this.stars.forEach(star => {
      star.getPosition();
      star.draw();
    });
    this.ctx.fill();

    this.canvasAnimationFrame = requestAnimationFrame(this.animate);
  };

  resize = e => {
    this.setSizes();
    this.HOLE.r = this.smallerSize / 4;
    this.HOLE.x = this.canvasWidth / 2;
    this.HOLE.y = this.canvasHeight / 2;
  };

  componentDidMount() {
    this.canvas = this.refs.canvas;

    this.ctx = this.canvas.getContext(`2d`);
    this.setSizes();

    for (let i = 0; i < this.STARS_COUNT; i++)
      this.stars[i] = new Star({
        ctx: this.ctx,
        HOLE: this.HOLE,
        Z_RANGE: this.Z_RANGE,
        Z_VELOCITY: this.Z_VELOCITY,
        canvas: {
          canvasWidth: this.canvasWidth,
          canvasHeight: this.canvasHeight,
          smallerSize: this.smallerSize,
        },
      });

    window.addEventListener(`resize`, this.resize);
    this.animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.canvasAnimationFrame);
    window.removeEventListener(`resize`, this.resize);
  }

  render() {
    return (
      <div
        style={{ minHeight: `20rem`, minWidth: `100%`, ...this.props.style }}
      >
        <canvas style={{ width: `100%`, height: `100%` }} ref="canvas" />
      </div>
    );
  }
}

export default BlackHole;
