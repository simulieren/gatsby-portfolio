import React from 'react';

class DotCanvas extends React.Component {
  cv;
  ctx;
  osCv;
  osCtx;
  osDotCv;
  osDotCtx;
  center;
  windowSize;
  HomepageCanvasReq;

  angleDeg: number = 0;
  angleRad: number = 0;
  angleDeltaXDeg: number = 0;
  angleDeltaYDeg: number = 0;
  startX: number = 0;
  startY: number = 0;

  DOT_GAP: number = 55;
  DOT_RADIUS: number = 2.5;
  CIRCLE_RADIUS: number = 23;
  WAVES: number = 35;
  SPEED: number = 1.5;
  DOT_COLOR = `#0000ff`;

  HomepageCanvasInit = () => {
    this.createOffScreenCanvas();

    this.cv = this.refs.cv;
    this.ctx = this.cv.getContext(`2d`);

    this.angleDeg = 0;
    this.angleRad = 0;

    window.onresize = this.resize;

    this.resize();
    this.draw();
  };

  createOffScreenCanvas = () => {
    this.osCv = document.createElement(`canvas`);
    this.osCtx = this.osCv.getContext(`2d`);

    this.osDotCv = document.createElement(`canvas`);
    this.osDotCtx = this.osDotCv.getContext(`2d`);

    this.drawDot();
  };

  drawDot = () => {
    this.osDotCtx.clearRect(0, 0, this.DOT_RADIUS * 2, this.DOT_RADIUS * 2);
    this.osDotCtx.beginPath();
    this.osDotCtx.fillStyle = this.DOT_COLOR;
    this.osDotCtx.arc(
      this.DOT_RADIUS,
      this.DOT_RADIUS,
      this.DOT_RADIUS,
      0,
      Math.PI * 2
    );
    this.osDotCtx.fill();
  };

  resize = () => {
    this.windowSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    this.center = {
      x: Math.round(this.windowSize.w / 2),
      y: Math.round(this.windowSize.h / 2),
    };

    this.cv.width = this.windowSize.w;
    this.cv.height = this.windowSize.h;
    this.osCv.width = this.windowSize.w;
    this.osCv.height = this.windowSize.h;

    this.setStartPosition();
  };

  setStartPosition = () => {
    for (var i = this.center.x; i > 0; i = i - this.DOT_GAP)
      this.startX = i - this.DOT_RADIUS - this.DOT_GAP;

    for (i = this.center.y; i > 0; i = i - this.DOT_GAP)
      this.startY = i - this.DOT_RADIUS - this.DOT_GAP;
  };

  draw = () => {
    this.HomepageCanvasReq = requestAnimationFrame(this.draw);
    this.canvasRender();
  };

  canvasRender = () => {
    this.ctx.clearRect(0, 0, this.cv.width, this.cv.height);
    this.osCtx.clearRect(0, 0, this.osCv.width, this.osCv.height);

    // ctx.beginPath();
    // ctx.fillStyle = '#FF0000';
    // ctx.arc( center.x, center.y, DOT_RADIUS, 0, Math.PI * 2 );
    // ctx.fill();

    this.angleDeg =
      this.angleDeg + this.SPEED < 360
        ? this.angleDeg + this.SPEED
        : this.angleDeg + this.SPEED - 360;
    this.angleDeltaXDeg = 0;
    this.angleDeltaYDeg = 0;

    for (
      var j = this.startY;
      j < this.windowSize.h + this.DOT_GAP;
      j += this.DOT_GAP
    ) {
      this.angleDeltaYDeg += this.WAVES;
      this.angleDeltaXDeg = this.angleDeltaYDeg;

      for (
        var i = this.startX;
        i < this.windowSize.w + this.DOT_GAP;
        i += this.DOT_GAP
      ) {
        this.angleDeltaXDeg += this.WAVES;
        this.angleRad = ((this.angleDeg + this.angleDeltaXDeg) * Math.PI) / 180;

        var x = Math.cos(this.angleRad) * this.CIRCLE_RADIUS + i;
        var y = Math.sin(this.angleRad) * this.CIRCLE_RADIUS + j;

        this.osCtx.drawImage(
          this.osDotCv,
          0,
          0,
          this.DOT_RADIUS * 2,
          this.DOT_RADIUS * 2,
          x,
          y,
          this.DOT_RADIUS * 2,
          this.DOT_RADIUS * 2
        );
      }
    }

    this.ctx.drawImage(
      this.osCv,
      0,
      0,
      this.windowSize.w,
      this.windowSize.h,
      0,
      0,
      this.windowSize.w,
      this.windowSize.h
    );
  };

  componentDidMount() {
    this.HomepageCanvasInit();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.HomepageCanvasReq);
  }

  render() {
    return (
      <div
        style={{ ...this.props.style, pointerEvents: `none` }}
        ref="mainContainer"
      >
        <canvas ref="cv" id="canvas" style={{ width: "100%" }} />
      </div>
    );
  }
}

export default DotCanvas;
