import Konva from 'konva';

// Circular Movement Functionality & Floating Animation Fx1
const filterTopL = layer => {
  const amplitude = 12;
  const period = 10000; // in milliseconds
  const centerX = 0;
  const animFx1 = new Konva.Animation(frame => {
    layer.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
    layer.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  }, layer);
  animFx1.start();
};

// Circular Movement Functionality & Floating Animation Fx2

const flangerTopR = layer => {
  const amplitude2 = 12;
  const period2 = 13000; // in milliseconds
  const centerX2 = 0;
  const animFx2 = new Konva.Animation(frame => {
    layer.x(amplitude2 * Math.sin((frame.time * 2 * Math.PI) / period2) + centerX2);
    layer.y(amplitude2 * Math.sin((frame.time * 2 * Math.PI) / period2) + centerX2);
  }, layer);
  animFx2.start();
};

// Circular Movement Functionality & Floating Animation Fx3
const filterBottomR = layer => {
  const amplitude3 = 10;
  const period3 = 10000;
  const centerX3 = 0;
  const animFx3 = new Konva.Animation(frame => {
    layer.x(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
    layer.y(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
  }, layer);
  animFx3.start();
};

// Circular Movement Functionality & Floating Animation Fx4

const flangerBottomL = layer => {
  const amplitude4 = 10;
  const period4 = 7000;
  const centerX4 = 0;
  const animFx4 = new Konva.Animation(frame => {
    layer.x(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
    layer.y(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
  }, layer);
  animFx4.start();
};

export { filterTopL, flangerTopR, filterBottomR, flangerBottomL };
