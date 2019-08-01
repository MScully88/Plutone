/* eslint-disable curly */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-properties */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
// Main application Stage/Canvas

let width = 780;
let height = 820;

let plutoneContainer = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

// FX 1

let fx1Layer = new Konva.Layer();

let fxSvg101 = new Konva.Path({
  x: 20,
  y: 21,
  data:
    'M22.5467 10.0457L48.312 18.3844L55.9399 47.5586L34.1717 57.965L11.6775 41.0457L17.1121 25.5457L22.5467 10.0457Z',
  fill: '#F2DDDD',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg102 = new Konva.Path({
  x: 20,
  y: 21,
  data: 'M18.7797 21.1681L32.6577 23.2866L18.7797 35.234L14.765 33.3865',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg103 = new Konva.Path({
  x: 20,
  y: 21,
  data:
    'M32.1461 23.5541L29.4773 12.901L22.5583 9.68775L34.5431 57.3671L43.859 17.1523L22.5583 48.5925L53.4468 40.0651L49.9873 23.5541L12.1798 40.0651L48.6529 50.7182',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg104 = new Konva.Path({
  x: 20,
  y: 21,
  data: 'M52.2056 34.1997L35.8643 14.2385',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// FX 2

let fx2Layer = new Konva.Layer();

let fxSvg201 = new Konva.Path({
  x: 650,
  y: 50,
  data:
    'M26.0728 39.246L45 39.246L18.0966 1L15.2367 4.20164L1 20.1395L1 35.5501L18.0966 46.0439L32.7742 80L26.0728 39.246Z',
  fill: 'lightblue',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg202 = new Konva.Path({
  x: 650,
  y: 50,
  data:
    'M18.0966 25.6834L18.0966 39.246L26.0728 39.246M18.0966 25.6834L26.0728 39.246M18.0966 25.6834L15.2367 4.20164M26.0728 39.246L45 39.246L18.0966 1L15.2367 4.20164M26.0728 39.246L32.7742 80L18.0966 46.0439M18.0966 46.0439L1 35.5501L1 20.1395M18.0966 46.0439L1 20.1395M1 20.1395L15.2367 4.20164M15.0565 2.84796L15.2367 4.20164',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// FX 3

let fx3Layer = new Konva.Layer();

let fxSvg301 = new Konva.Path({
  x: 500,
  y: 600,
  data: 'M79 21.4568L39.2656 1L7.74809 25.2674L39.2657 47.2485L79 21.4568Z',
  fill: '#F6B3EC',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg302 = new Konva.Path({
  x: 500,
  y: 600,
  data:
    'M39.2657 47.2485L79 21.4568L39.2656 1L7.7481 25.2674M39.2657 47.2485L7.7481 25.2674M39.2657 47.2485L39.2657 73M7.7481 25.2674L1.00001 47.2485L14.4962 51.7811',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// FX 4

let fx4Layer = new Konva.Layer();

let fxSvg401 = new Konva.Path({
  x: 15,
  y: 690,
  data:
    'M57 65L49.3229 26.42L33.2011 1L1 34.9076L40.1059 44.274L41.1387 50.7468L28.5948 57.284L42.7974 61.142L57 65Z',
  fill: '#A1CCF3',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let fxSvg402 = new Konva.Path({
  x: 15,
  y: 690,
  data:
    'M49.3229 26.42L57 65L42.7974 61.142M49.3229 26.42L42.7974 61.142M49.3229 26.42L33.2011 1M33.2011 1L1 34.9076L49.3229 46.4816L28.5948 57.284L42.7974 61.142M33.2011 1L42.7974 61.142',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// Centre

let centerLayer = new Konva.Layer();

let centerSvg101 = new Konva.Path({
  x: 350,
  y: 370,
  data:
    'M65.0179 127.813L153 149.5L120.295 103.186L119.136 102.301L141 84.5714L110.858 74.8431L121.884 54.496L153 1.50001L109.05 28.3302L119.136 12L83.1708 22.4739L2.50015 1.50001L43.2777 43.4215L16.0002 44.6604L22.3561 80.3991L53.1727 88.9959L2.50015 115L43.1574 103.806L22.3561 149.5L65.0179 127.813Z',
  fill: '#AED9DC',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.9,
    y: 0.9,
  },
  offset: {
    x: 75,
    y: 75,
  },
});

let centerSvg102 = new Konva.Path({
  x: 350,
  y: 370,
  data:
    'M83.1708 74.8431L83.1708 22.4739M83.1708 74.8431L57.1211 44.6604M83.1708 74.8431L53.1727 88.9959M83.1708 74.8431L121.884 54.496M83.1708 74.8431L98.9643 44.6604M83.1708 74.8431L72.0961 51.4177L57.1211 44.6604M83.1708 74.8431L57.1211 74.8431M83.1708 74.8431L119.136 102.301M83.1708 74.8431L76.6224 93.9512M83.1708 22.4739L119.136 12L109.05 28.3302M83.1708 22.4739L2.50015 1.50001M57.1211 44.6604L2.50015 1.50001M53.1727 88.9959L22.3561 80.3991L16.0002 44.6604M53.1727 88.9959L2.50015 115L43.1574 103.806M121.884 54.496L110.858 74.8431L141 84.5714L119.136 102.301M121.884 54.496L98.9643 44.6604M121.884 54.496L153 1.50001L109.05 28.3302M98.9643 44.6604L109.05 28.3302M57.1211 74.8431L16.0002 44.6604M57.1211 74.8431L43.2777 43.4215M65.0179 127.813L83.1708 93.9512L153 149.5M65.0179 127.813L153 149.5M65.0179 127.813L76.6224 93.9512M65.0179 127.813L22.3561 149.5L43.1574 103.806M153 149.5L120.295 103.186L119.136 102.301M2.50015 1.50001L43.2777 43.4215M16.0002 44.6604L43.2777 43.4215M76.6224 93.9512L43.1574 103.806',
  stroke: 'black',
  strokeWidth: 0.5,
  scale: {
    x: 0.9,
    y: 0.9,
  },
  offset: {
    x: 75,
    y: 75,
  },
});

// Top shard

let topLayer = new Konva.Layer();

let topSvg101 = new Konva.Path({
  x: 325,
  y: 61,
  data:
    'M81.8874 113.377L91 20.8142L75.7122 4.43327L69.123 43.8202L56.1014 28.5999L56.8631 17.042L40.432 14.928L35.5688 113.377L40.432 1L0.999986 14.928L27.6366 139.036L48.3643 146L81.8874 113.377Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

let topSvg102 = new Konva.Path({
  x: 325,
  y: 61,
  data:
    'M59.9321 132.611L69.123 43.8202M69.123 43.8202L75.7122 4.43327L91 20.8142L81.8874 113.377L48.3643 146M69.123 43.8202L56.1014 28.5999L48.3643 146M48.3643 146L56.8631 17.042L40.432 14.928L35.5688 113.377L40.432 1L0.999988 14.928L27.6366 139.036L48.3643 146Z',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

// Left shard

let leftLayer = new Konva.Layer();

let leftSvg101 = new Konva.Path({
  x: 25,
  y: 340,
  data:
    'M155.857 62.8703L154.557 57.6885L145.879 55.9776L147.547 51.6697L139.027 30.8197L11.0281 33.4536L29.2094 50.6592L48.0831 50.0616L47.2443 53.6104L17.318 62.2276L10.7827 74.9469L23.8305 76.9259L36.4845 99.3518L104.228 87.1073L148.916 79.034L140.307 69.1444L156.511 65.4769L155.857 62.8703Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
  rotate: 10,
});

let leftSvg102 = new Konva.Path({
  x: 25,
  y: 340,
  data:
    'M147.547 51.6697L123.255 50.022L51.0022 37.7115L48.0831 50.0616M147.547 51.6697L145.879 55.9776M147.547 51.6697L139.027 30.8197L11.0281 33.4536L29.2094 50.6592L48.0831 50.0616M46.1286 58.3304L44.1826 66.5637L144.21 60.2854L145.879 55.9776M46.1286 58.3304L36.5905 60.7244L41.0282 78.4053M46.1286 58.3304L47.2443 53.6104M155.857 62.8703L42.2106 83.116L41.0282 78.4053M155.857 62.8703L154.557 57.6885L145.879 55.9776M155.857 62.8703L156.511 65.4769L140.307 69.1444M47.2443 53.6104L17.318 62.2276L10.7827 74.9469L23.8305 76.9259M47.2443 53.6104L48.0831 50.0616M41.0282 78.4053L32.2129 77.3973M32.2129 77.3973L44.1654 90.9043L140.307 69.1444M32.2129 77.3973L23.8305 76.9259M140.307 69.1444L148.916 79.034L104.228 87.1073L36.4845 99.3518L23.8305 76.9259',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

// Bottom shard

let bottomLayer = new Konva.Layer();

let bottomSvg101 = new Konva.Path({
  x: 320,
  y: 580,
  data:
    'M26.4733 5.82519L13.3637 101.404L22.9373 104.686L36.9261 6.79102L18.3877 138.853L28.4725 140.171L42.5764 171.448L63.3494 144.238L70.1781 58.6758L57.4015 57.3522L63.5475 9.25082L55.6975 8.52549L36.9261 6.79102L26.4733 5.82519Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

let bottomSvg102 = new Konva.Path({
  x: 320,
  y: 580,
  data:
    'M55.6975 8.52549L43.179 101.971M43.179 101.971L38.5572 141.489L28.4725 140.171M43.179 101.971L51.2556 105.454L57.4015 57.3522M28.4725 140.171L18.3877 138.853L36.9261 6.79102L22.9373 104.686L13.3637 101.404L26.4733 5.82519L63.5475 9.25082L57.4015 57.3522M28.4725 140.171L42.5764 171.448L63.3494 144.238L70.1781 58.6758L57.4015 57.3522',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

// Right shard

let rightLayer = new Konva.Layer();

let rightSvg101 = new Konva.Path({
  x: 530,
  y: 350,
  data:
    'M1 14.9877L1 20.3302L9.00044 24.1023L6.33363 27.8744L9.52105 50.1712L134.311 78.7771L120.865 57.663L102.414 53.648L104.091 50.4101L135.215 49.3375L144.65 38.5918L132.476 33.496L125.663 8.66419L56.9765 4.04866L11.6673 1.00004L17.6094 12.6879L1 12.3002L1 14.9877Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

let rightSvg102 = new Konva.Path({
  x: 530,
  y: 350,
  data:
    'M6.33363 27.8744L29.4937 35.3863L96.5757 64.9158L102.414 53.648M6.33363 27.8744L9.00044 24.1023M6.33363 27.8744L9.52105 50.1712L134.311 78.7771L120.865 57.663L102.414 53.648M106.322 46.1037L110.214 38.5918L11.6673 20.3302L9.00044 24.1023M106.322 46.1037H116.156V27.8744M106.322 46.1037L104.091 50.4101M1 14.9877L116.156 23.0176V27.8744M1 14.9877L1 20.3302L9.00044 24.1023M1 14.9877L1 12.3002L17.6094 12.6879M104.091 50.4101L135.215 49.3375L144.65 38.5918L132.476 33.496M104.091 50.4101L102.414 53.648M116.156 27.8744L124.461 30.9981M124.461 30.9981L116.156 14.9877L17.6094 12.6879M124.461 30.9981L132.476 33.496M17.6094 12.6879L11.6673 1.00004L56.9765 4.04866L125.663 8.66419L132.476 33.496',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.7,
    y: 0.7,
  },
});

// Top Left Shard

let topLLayer = new Konva.Layer();

let topLSvg101 = new Konva.Path({
  x: 120,
  y: 175,
  data:
    'M166.836 98.7795L95.3599 33.9856L87.2448 40.033L160.136 106.861L61.6165 16.9837L54.834 24.5623L21.0567 18.5394L31.782 51.049L98.5387 105.003L106.846 95.206L143.073 127.442L148.104 121.373L160.136 106.861L166.836 98.7795Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let topLSvg102 = new Konva.Path({
  x: 120,
  y: 175,
  data:
    'M148.104 121.373L78.055 58.2717M78.055 58.2717L48.0514 32.1409L54.834 24.5623M78.055 58.2717L70.6195 62.9702L106.846 95.206M54.834 24.5623L61.6165 16.9837L160.136 106.861L87.2448 40.033L95.3599 33.9856L166.836 98.7795L143.073 127.442L106.846 95.206M54.834 24.5623L21.0567 18.5394L31.782 51.049L98.5387 105.003L106.846 95.206',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// Bottom Left Shard

let bottomLLayer = new Konva.Layer();

let bottomLSvg101 = new Konva.Path({
  x: 135,
  y: 535,
  data:
    'M130.504 4.95757L121.442 1.09333L99.9365 7.38084L1.22412 108.913L25.0037 140.888L30.9241 133.262L52.5324 125.336L64.2075 140.888L72.908 129.474L76.9807 130.875L135.343 24.7308L132.923 14.8442L131.714 9.90087L130.504 4.95757Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let bottomLSvg102 = new Konva.Path({
  x: 135,
  y: 535,
  data:
    'M130.504 4.95757L121.442 1.09333M130.504 4.95757L131.714 9.90087L132.923 14.8442M130.504 4.95757L42.3758 118.507M121.442 1.09333L15.1486 110.026L39.8731 116.631L42.3758 118.507M121.442 1.09333L99.9365 7.38084L1.22411 108.913L25.0037 140.888L30.9241 133.262M30.9241 133.262L42.3758 118.507M30.9241 133.262L52.5324 125.336L64.2075 140.888L72.908 129.474M132.923 14.8442L135.343 24.7308L76.9807 130.875L72.908 129.474M132.923 14.8442L68.8352 128.073L72.908 129.474',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// Top Right Shard

let topRLayer = new Konva.Layer();

let topRSvg101 = new Konva.Path({
  x: 490,
  y: 165,
  data:
    'M28.0057 149.992L109.246 97.962L105.533 88.5471L21.9595 141.41L134.486 69.8437L128.947 61.3143L143.599 30.2902L109.415 32.1343L39.8721 82.4454L47.1536 93.0272L6.56098 119.556L11.1016 126L21.9595 141.41L28.0057 149.992Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let topRSvg102 = new Konva.Path({
  x: 490,
  y: 165,
  data:
    'M11.1016 126L90.3352 74.9047M90.3352 74.9047L123.407 52.7849L128.947 61.3143M90.3352 74.9047L87.7463 66.4988L47.1536 93.0272M128.947 61.3143L134.486 69.8437L21.9595 141.41L105.533 88.5471L109.246 97.962L28.0057 149.992L6.56098 119.556L47.1536 93.0272M128.947 61.3143L143.599 30.2902L109.415 32.1343L39.8721 82.4454L47.1536 93.0272',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// Bottom Right Shard

let bottomRLayer = new Konva.Layer();

let bottomRSvg101 = new Konva.Path({
  x: 480,
  y: 535,
  data:
    'M6.70788 1.42055L0.629837 9.17383L1.13714 31.5736L73.6611 153.201L110.701 138.507L104.867 130.815L102.804 107.891L120.848 100.639L112.075 89.2813L114.482 85.71L27.0597 1.86434L16.8838 1.64244L11.7958 1.5315L6.70788 1.42055Z',
  fill: '#C4C4C4',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

let bottomRSvg102 = new Konva.Path({
  x: 480,
  y: 535,
  data:
    'M6.70788 1.42055L0.629837 9.17383M6.70788 1.42055L11.7958 1.5315L16.8838 1.64244M6.70788 1.42055L93.579 115.935M0.629837 9.17383L78.3397 140.039L91.1194 117.866L93.579 115.935M0.629837 9.17383L1.13714 31.5736L73.6611 153.201L110.701 138.507L104.867 130.815M104.867 130.815L93.579 115.935M104.867 130.815L102.804 107.891L120.848 100.639L112.075 89.2813M16.8838 1.64244L27.0597 1.86434L114.482 85.71L112.075 89.2813M16.8838 1.64244L109.667 92.8527L112.075 89.2813',
  stroke: 'black',
  strokeWidth: 1,
  scale: {
    x: 0.6,
    y: 0.6,
  },
});

// Circular Movement Functionality & Floating Animation Fx1

let circleFunc1 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    let x = 0;
    let y = 0;
    let radius = 50;
    let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
    if (scale < 1)
      return {
        y: Math.round((pos.y - y) * scale + y),
        x: Math.round((pos.x - x) * scale + x),
      };
    return pos;
  },
});

let amplitude = 25;
let period = 10000; // in milliseconds
let centerX = plutoneContainer.width() / 9;

let animFx1 = new Konva.Animation(frame => {
  fxSvg101.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg101.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg102.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg102.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg103.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg103.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg104.x(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
  fxSvg104.y(amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX);
}, fx1Layer);

animFx1.start();

// Circular Movement Functionality & Floating Animation Fx2

let circleFunc2 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    let x = 0;
    let y = 0;
    let radius = 50;
    let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
    if (scale < 1)
      return {
        y: Math.round((pos.y - y) * scale + y),
        x: Math.round((pos.x - x) * scale + x),
      };
    return pos;
  },
});

let amplitude2 = 29;
let period2 = 13000;
let centerX2 = plutoneContainer.width() / 1.2;
let animFx2 = new Konva.Animation(frame => {
  fxSvg201.x(amplitude2 * Math.sin((frame.time * 2 * Math.PI) / period2) + centerX2);
}, fx2Layer);

animFx2.start();

// Circular Movement Functionality & Floating Animation Fx3

let circleFunc3 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    let x = 0;
    let y = 0;
    let radius = 50;
    let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
    if (scale < 1)
      return {
        y: Math.round((pos.y - y) * scale + y),
        x: Math.round((pos.x - x) * scale + x),
      };
    return pos;
  },
});

let amplitude3 = 29;
let period3 = 6000;
let centerX3 = plutoneContainer.width() / 1.2;
let animFx3 = new Konva.Animation(frame => {
  fxSvg301.x(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
  fxSvg301.y(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
  fxSvg302.x(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
  fxSvg302.y(amplitude3 * Math.sin((frame.time * 2 * Math.PI) / period3) + centerX3);
}, fx3Layer);

animFx3.start();

// Circular Movement Functionality & Floating Animation Fx4

let circleFunc4 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    let x = 0;
    let y = 0;
    let radius = 50;
    let scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
    if (scale < 1)
      return {
        y: Math.round((pos.y - y) * scale + y),
        x: Math.round((pos.x - x) * scale + x),
      };
    return pos;
  },
});

let amplitude4 = 30;
let period4 = 7000;
let centerX4 = plutoneContainer.width() / 3.5;
let animFx4 = new Konva.Animation(frame => {
  fxSvg401.x(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
  // fxSvg401.y(
  //   amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4
  // );
  fxSvg402.x(amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4);
  // fxSvg402.y(
  //   amplitude4 * Math.sin((frame.time * 2 * Math.PI) / period4) + centerX4
  // );
}, fx4Layer);

animFx4.start();

// Centre Rotation Animation

let angularSpeed = 10;
let animCenterRotation = new Konva.Animation(frame => {
  let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
  centerSvg101.rotate(angleDiff);
  centerSvg102.rotate(angleDiff);
}, centerLayer);

animCenterRotation.start();

// Horizontal Movement Functionality & Floating Animation

// Left

let horizontalFunc1 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: this.absolutePosition().y,
    };
  },
});

let amplitudeLeft = 29;
let periodLeft = 11000;
let centerXLeft = plutoneContainer.width() / 80;
let animLeft = new Konva.Animation(frame => {
  leftSvg101.x(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
  leftSvg102.x(amplitudeLeft * Math.sin((frame.time * 2 * Math.PI) / periodLeft) + centerXLeft);
}, leftLayer);

animLeft.start();

// Right

let horizontalFunc2 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: this.absolutePosition().y,
    };
  },
});

let amplitudeRight = 29;
let periodRight = 9000;
let centerXRight = plutoneContainer.width() / 1.3;
let animRight = new Konva.Animation(frame => {
  rightSvg101.x(amplitudeRight * Math.sin((frame.time * 2 * Math.PI) / periodRight) + centerXRight);
  rightSvg102.x(amplitudeRight * Math.sin((frame.time * 2 * Math.PI) / periodRight) + centerXRight);
}, rightLayer);

animRight.start();

// Diagonal Movement Functionality

// Top Left

let diagonalFunc1 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: pos.y,
    };
  },
});

// Bottom Left

let diagonalFunc2 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: pos.y,
    };
  },
});

// Top Right

let diagonalFunc3 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: pos.y,
    };
  },
});

// Bottom Right

let diagonalFunc4 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: pos.x,
      y: pos.y,
    };
  },
});

// Vertical Movement Functionality & Floating Animation

// Top

let verticalFunc1 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: this.absolutePosition().x,
      y: pos.y,
    };
  },
});

let amplitudeTop = 29;
let periodTop = 13000;
let centerXTop = plutoneContainer.width() / 80;
let animTop = new Konva.Animation(frame => {
  topSvg101.y(amplitudeTop * Math.sin((frame.time * 2 * Math.PI) / periodTop) + centerXTop);
  topSvg102.y(amplitudeTop * Math.sin((frame.time * 2 * Math.PI) / periodTop) + centerXTop);
}, topLayer);

animTop.start();

// Bottom

let verticalFunc2 = new Konva.Group({
  draggable: true,
  dragBoundFunc: function(pos) {
    return {
      x: this.absolutePosition().x,
      y: pos.y,
    };
  },
});

let amplitudeBottom = 29;
let periodBottom = 9000;
let centerXBottom = plutoneContainer.width() / 1.25;
let animBottom = new Konva.Animation(frame => {
  bottomSvg101.y(
    amplitudeBottom * Math.sin((frame.time * 2 * Math.PI) / periodBottom) + centerXBottom,
  );
  bottomSvg102.y(
    amplitudeBottom * Math.sin((frame.time * 2 * Math.PI) / periodBottom) + centerXBottom,
  );
}, bottomLayer);

animBottom.start();

// Functionality added to each layer

fx1Layer.add(circleFunc1);
fx2Layer.add(circleFunc2);
fx3Layer.add(circleFunc3);
fx4Layer.add(circleFunc4);
leftLayer.add(horizontalFunc1);
topLayer.add(verticalFunc1);
bottomLayer.add(verticalFunc2);
rightLayer.add(horizontalFunc2);
topLLayer.add(diagonalFunc1);
bottomLLayer.add(diagonalFunc2);
topRLayer.add(diagonalFunc3);
bottomRLayer.add(diagonalFunc4);

// Centre SVG path added to center layer

centerLayer.add(centerSvg101, centerSvg102);

// Each SVG path added to the functionality

circleFunc1.add(fxSvg101, fxSvg102, fxSvg103, fxSvg104);

circleFunc2.add(fxSvg201, fxSvg202);

circleFunc3.add(fxSvg301, fxSvg302);

circleFunc4.add(fxSvg401, fxSvg402);

horizontalFunc1.add(leftSvg101, leftSvg102);

horizontalFunc2.add(rightSvg101, rightSvg102);

verticalFunc1.add(topSvg101, topSvg102);

verticalFunc2.add(bottomSvg101, bottomSvg102);

diagonalFunc1.add(topLSvg101, topLSvg102);

diagonalFunc2.add(bottomLSvg101, bottomLSvg102);

diagonalFunc3.add(topRSvg101, topRSvg102);

diagonalFunc4.add(bottomRSvg101, bottomRSvg102);

// Each completed layer added to the main application stage/canvas

plutoneContainer.add(
  fx1Layer,
  fx2Layer,
  fx3Layer,
  fx4Layer,
  centerLayer,
  leftLayer,
  topLayer,
  bottomLayer,
  rightLayer,
  topLLayer,
  bottomLLayer,
  topRLayer,
  bottomRLayer,
);

// Resizable and scalable konva stage and elements

function fitStageIntoParentContainer() {
  let container = document.querySelector('#outerDiv');

  // now we need to fit stage into parent
  let containerWidth = container.offsetWidth;
  // to do this we need to scale the stage
  let scale = containerWidth / width;

  plutoneContainer.width(width * scale);
  plutoneContainer.height(height * scale);
  plutoneContainer.scale({ x: scale, y: scale });
  plutoneContainer.draw();
}

toggle();
window.onresize = function() {
  toggle();
};

function toggle() {
  if (window.innerWidth < 780) {
    fitStageIntoParentContainer();
  } else {
  }
}
