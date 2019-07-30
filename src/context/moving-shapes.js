import Konva from 'konva';

const moveShard1 = (ref, layer) => {
  const amplitude = 25;
  const period = 10000; // in milliseconds
  const centerX = 20;

  const animFx1 = new Konva.Animation(frame => {
    ref.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
    ref.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  }, layer);

  animFx1.start();
};

export { moveShard1 };

// // Circular Movement Functionality & Floating Animation Fx2

// const amplitude2 = 29;
// const period2 = 13000;
// const centerX2 = plutoneContainer.width() / 1.2;
// const animFx2 = new Konva.Animation(frame => {
//   fxSvg201.x(amplitude2 * Math.sin((frame.time * 2 * Math.PI) / period2) + centerX2);
//   fxSvg202.x(amplitude2 * Math.sin((frame.time * 2 * Math.PI) / period2) + centerX2);
// }, fx2Layer);

// animFx2.start();

// // Circular Movement Functionality & Floating Animation Fx3

// const amplitude3 = 29;
// const period3 = 4000;
// const centerX3 = plutoneContainer.width() / 1.2;
// const animFx3 = new Konva.Animation(frame => {
//   fxSvg301.x(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
//   fxSvg301.y(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
//   fxSvg302.x(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
//   fxSvg302.y(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
// }, fx3Layer);

// animFx3.start();

// // Circular Movement Functionality & Floating Animation Fx4

// const circleFunc4 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     console.log(pos);
//     const x = 0;
//     const y = 0;
//     const radius = 50;
//     const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
//     if (scale < 1) {
//     {
// return {
//       y: Math.round((pos.y - y) * scale + y),
//       x: Math.round((pos.x - x) * scale + x),
//     }; }
//     return pos;
//   },
// });

// const amplitude4 = 30;
// const period4 = 7000;
// const centerX4 = plutoneContainer.width() / 3.5;
// const animFx4 = new Konva.Animation(frame => {
//   fxSvg401.x(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
//   // fxSvg401.y(
//   //   amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4
//   // );
//   fxSvg402.x(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
//   // fxSvg402.y(
//   //   amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4
//   // );
// }, fx4Layer);

// animFx4.start();

// // Centre Rotation Animation

// const angularSpeed = 10;
// const animCenterRotation = new Konva.Animation(frame => {
//   const angleDiff = (frame.timeDiff * angularSpeed) / 1000;
//   centerSvg101.rotate(angleDiff);
//   centerSvg102.rotate(angleDiff);
// }, centerLayer);

// animCenterRotation.start();

// // Horizontal Movement Functionality & Floating Animation

// // Left

// const horizontalFunc1 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     return {
//       x: pos.x,
//       y: this.absolutePosition().y,
//     };
//   },
// });

// const amplitudeLeft = 29;
// const periodLeft = 11000;
// const centerXLeft = plutoneContainer.width() / 80;
// const animLeft = new Konva.Animation(frame => {
//   leftSvg101.x(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
//   leftSvg102.x(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
// }, leftLayer);

// animLeft.start();

// // Right

// const horizontalFunc2 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     return {
//       x: pos.x,
//       y: this.absolutePosition().y,
//     };
//   },
// });

// const amplitudeRight = 29;
// const periodRight = 9000;
// const centerXRight = plutoneContainer.width() / 1.3;
// const animRight = new Konva.Animation(frame => {
//   rightSvg101.x(amplitudeRight * Math.sin((frame.time * 2 * Math.PI) / periodRight) + centerXRight);
//   rightSvg102.x(amplitudeRight * Math.sin((frame.time * 2 * Math.PI) / periodRight) + centerXRight);
// }, rightLayer);

// animRight.start();

// // Diagonal Movement Functionality

// // Top Left

// const diagonalFunc1 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     return {
//       x: pos.x,
//       y: pos.y,
//     };
//   },
// });

// // Vertical Movement Functionality & Floating Animation

// // Top

// const verticalFunc1 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     return {
//       x: this.absolutePosition().x,
//       y: pos.y,
//     };
//   },
// });

// const amplitudeTop = 29;
// const periodTop = 13000;
// const centerXTop = plutoneContainer.width() / 80;
// const animTop = new Konva.Animation(frame => {
//   topSvg101.y(amplitudeTop * Math.sin((frame.time * 2 * Math.PI) / periodTop) + centerXTop);
//   topSvg102.y(amplitudeTop * Math.sin((frame.time * 2 * Math.PI) / periodTop) + centerXTop);
// }, topLayer);

// animTop.start();

// // Bottom

// const verticalFunc2 = new Konva.Group({
//   draggable: true,
//   dragBoundFunc(pos) {
//     return {
//       x: this.absolutePosition().x,
//       y: pos.y,
//     };
//   },
// });

// const amplitudeBottom = 29;
// const periodBottom = 9000;
// const centerXBottom = plutoneContainer.width() / 1.25;
// const animBottom = new Konva.Animation(frame => {
//   bottomSvg101.y(
//     amplitudeBottom * Math.sin((frame.time * 2 * Math.PI) / periodBottom) + centerXBottom,
//   );
//   bottomSvg102.y(
//     amplitudeBottom * Math.sin((frame.time * 2 * Math.PI) / periodBottom) + centerXBottom,
//   );
// }, bottomLayer);

// animBottom.start();
