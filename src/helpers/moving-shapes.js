import Konva from 'konva';

// const stageWidth = 700;
// Horizontal Movement Functionality
// Left
const moveKeysMainLeft = layer => {
  const amplitudeLeft = 5;
  const periodLeft = 11000;
  const centerXLeft = 8.75;
  const animLeft = new Konva.Animation(frame => {
    layer.y(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
    layer.x(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
  }, layer);
  animLeft.start();
};

// Right
const moveSynthStrRight = layer => {
  const amplitudeRight = 12;
  const periodRight = 15000;
  const centerXRight = 8.73;
  const animRight = new Konva.Animation(frame => {
    layer.x(amplitudeRight * Math.sin((frame.time * 2 * Math.PI) / periodRight) + centerXRight);
  }, layer);
  animRight.start();
};

// // Top
const moveDrumsMainTop = (layer, isDrag) => {
  const amplitudeTop = 10;
  const periodTop = 13000;
  const centerXTop = 8.75;
  const animTop = new Konva.Animation(frame => {
    layer.y(amplitudeTop * Math.sin((frame.time * 2 * Math.PI) / periodTop) + centerXTop);
  }, layer);
  function animation() {
    if (!isDrag) {
      animTop.start();
    } else {
      animTop.stop();
    }
  }
  animation();
};

// // Bottom
const moveBassMainBottom = layer => {
  const amplitudeBottom = 15;
  const periodBottom = 9000;
  const centerXBottom = 8.75;
  const animBottom = new Konva.Animation(frame => {
    layer.y(amplitudeBottom * Math.sin((frame.time * 2 * Math.PI) / periodBottom) + centerXBottom);
  }, layer);

  animBottom.start();
};

const moveKickMainCenter = layer => {
  const angularSpeed = 10;
  const animCenterRotation = new Konva.Animation(frame => {
    const angleDiff = (frame.timeDiff * angularSpeed) / 1000;
    layer.rotate(angleDiff);
  }, layer);

  animCenterRotation.start();
};

export {
  moveDrumsMainTop,
  moveSynthStrRight,
  moveBassMainBottom,
  moveKeysMainLeft,
  moveKickMainCenter,
};
