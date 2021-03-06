/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import { Group, Path } from 'react-konva';
// import styles from './Shard.module.scss';
import {
  moveBassMainBottom,
  moveDrumsMainTop,
  moveKeysMainLeft,
  moveSynthStrRight,
  moveKickMainCenter,
} from '../../helpers/moving-shapes';
// import styles from './Shard.module.scss';

const Shard = ({ shardTrack, instrumentName, instrumentIndex, shapeObject }) => {
  // useRef to target node element of the shapes
  const inputEL = useRef(null);
  const layerEL = useRef(null);
  const groupEL = useRef(null);
  // eslint-disable-next-line no-unused-vars // if kick play straight away
  const [isKickMain, setKickMainValue] = useState(false);
  // setting x and y dependent on what handle is being triggered
  const [isX, setX] = useState(null);
  const [isY, setY] = useState(null);
  // onMouseDrag start and end change this value
  const [isDrag, setDrag] = useState(false);
  // Array of objects with the paths for each layer

  const shard = shapeObject[instrumentIndex];
  const maxVolume = 70;
  // sets kick to play on render
  useEffect(() => {
    if (instrumentName === 'kickMain') {
      setKickMainValue(true);
      shardTrack.get(instrumentName).volume.value = maxVolume;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (instrumentName === 'drumsMain') {
      moveDrumsMainTop(layerEL.current, inputEL.current);
    }
    if (instrumentName === 'synthStr') {
      moveSynthStrRight(layerEL.current);
    }
    if (instrumentName === 'bassMain') {
      moveBassMainBottom(layerEL.current);
    }
    if (instrumentName === 'keysMain') {
      moveKeysMainLeft(layerEL.current);
    }
    // if (instrumentName === 'kickMain') {
    //   moveKickMainCenter(layerEL.current);
    // }
  }, [instrumentName, isDrag]);

  useEffect(() => {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 92;
    const track = shardTrack.get(instrumentName);
    // eslint-disable-next-line no-unused-vars
    const loop = new Tone.Loop(time => {
      track.start();
    }, '8m').start(0);
  }, [shardTrack, instrumentName, instrumentIndex]);

  // top
  const handleDrumsMain = ({ y }) => {
    if (y > 0 && y < 175) {
      setX(0);
      setY(y);
    }
    if (y < maxVolume) {
      shardTrack.get(instrumentName).volume.value = y;
    }
  };

  // topR Solo - needs new track
  const handleSolo = ({ x, y }) => {
    if (x < 0 && Math.abs(x) < 94) {
      const angle = -45; // angle in degrees
      setX(Math.abs(x) * Math.tan((angle * Math.PI) / 180));
      setY(Math.abs(x));
    }
    if (Math.abs(x) < maxVolume && x < 0) {
      shardTrack.get(instrumentName).volume.value = Math.abs(x);
    }
  };

  // right
  const handleStrSynth = ({ x }) => {
    if (x < 0 && x > -200) {
      setX(x);
      setY(0);
    }
    if (Math.abs(x) < maxVolume && x < 0) {
      shardTrack.get(instrumentName).volume.value = Math.abs(x);
    }
  };

  // fx1 bottomR
  const handlefx1 = ({ x, y }) => {
    if (x < 0 && Math.abs(x) < 94) {
      const angle = 45; // angle in degrees
      setX(x * Math.tan((angle * Math.PI) / 180));
      setY(x);
    }
    if (Math.abs(x) < maxVolume && x < 0) {
      shardTrack.get(instrumentName).volume.value = Math.abs(x);
    }
  };

  // bottom
  const handleBassMain = ({ y }) => {
    const plusPos = Math.abs(y);
    if (y < 0 && y > -150) {
      setX(0);
      setY(y);
    }
    if (plusPos < 200 && y < 0) {
      // division means the volume can last for the whole drag
      shardTrack.get(instrumentName).volume.value = plusPos / 2.87;
    }
  };

  // trackfx2 bottomL - track fx2 needs new track
  const handlefx2 = ({ x, y }) => {
    if (y < 0 && Math.abs(y) < 94) {
      const angle = -45; // angle in degrees
      setX(Math.abs(y));
      setY(Math.abs(y) * Math.tan((angle * Math.PI) / 180));
    }
    if (Math.abs(x) < maxVolume && x > 0) {
      shardTrack.get(instrumentName).volume.value = Math.abs(x);
    }
  };
  // left
  const handleKeysMain = ({ x }) => {
    if (x < 220 && x > 0) {
      setX(x);
      setY(0);
    }
    if (x < maxVolume) {
      shardTrack.get(instrumentName).volume.value = x;
    }
  };

  // baseStartMain topL
  const handlebaseStartMain = ({ x, y }) => {
    if (y > 0 && y < 94) {
      const angle = 45; // angle in degrees
      setX(y);
      setY(y * Math.tan((angle * Math.PI) / 180));
    }
    if (Math.abs(x) < 60 && x > 0) {
      shardTrack.get(instrumentName).volume.value = Math.abs(x);
    }
  };

  const getSoundHandler = soundName => {
    let handler = null;
    // top
    if (soundName === 'drumsMain') {
      handler = handleDrumsMain;
    }
    // topR
    if (soundName === 'solo') {
      handler = handleSolo;
    }
    // right
    if (soundName === 'keysMain') {
      handler = handleKeysMain;
    }
    // bottomR
    if (soundName === 'fx1') {
      handler = handlefx1;
    }
    // bottom
    if (soundName === 'synthStr') {
      handler = handleStrSynth;
    }
    // bottomR
    if (soundName === 'fx2') {
      handler = handlefx2;
    }
    // left
    if (soundName === 'bassMain') {
      handler = handleBassMain;
    }
    // bottomLeft
    if (soundName === 'baseStartMain') {
      handler = handlebaseStartMain;
    }
    return handler;
  };

  const changeSize = () => {
    groupEL.current.to({
      scaleX: 1.05,
      scaleY: 1.05,
      duration: 0.2,
      offsetX: 15,
      offsetY: 15,
    });
    // to() is a method of `Konva.Node` instances
  };

  const returnSize = () => {
    groupEL.current.to({
      scaleX: 1.0,
      scaleY: 1.0,
      duration: 0.2,
      offsetX: 0,
      offsetY: 0,
    });
  };

  const handleOnDragEnd = y => {
    returnSize();
  };

  return (
    <>
      {/* //this targets the node to trigger animation */}
      <Group ref={layerEL}>
        <Group
          ref={groupEL}
          draggable
          // pos gives x and y values on mouse drag event
          dragBoundFunc={pos => {
            let coordinates = null;
            // triggers Soundhandler and also passing in X and Y as values
            if (instrumentName !== 'kickMain') {
              getSoundHandler(instrumentName)(pos);
              coordinates = {
                x: isX,
                y: isY,
              };
            }
            return coordinates;
          }}
          onDragStart={changeSize}
          onDragEnd={pos => {
            handleOnDragEnd(pos);
          }}
        >
          {shard.map(
            (
              {
                x,
                y,
                data,
                fill,
                stroke,
                strokeWidth,
                scale,
                fillLinearGradientStartPoint,
                fillLinearGradientEndPoint,
                fillLinearGradientColorStops,
              },
              index,
            ) => {
              return (
                <Path
                  ref={inputEL}
                  key={instrumentName + index}
                  x={x}
                  y={y}
                  data={data}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  scale={scale}
                  fillLinearGradientStartPoint={fillLinearGradientStartPoint}
                  fillLinearGradientEndPoint={fillLinearGradientEndPoint}
                  fillLinearGradientColorStops={fillLinearGradientColorStops}
                />
              );
            },
          )}
        </Group>
      </Group>
    </>
  );
};

Shard.propTypes = {
  shapeObject: PropTypes.array,
  shardTrack: PropTypes.object,
  instrumentName: PropTypes.string,
  instrumentIndex: PropTypes.number,
};

export default Shard;
