/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import { Group, Layer, Path } from 'react-konva';
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
      moveDrumsMainTop(layerEL.current, isDrag);
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

  // topR Solo

  const handleSolo = ({ x, y }) => {
    const angle = 32; // angle in degrees
    const angleRad = angle * (Math.PI / 180); // angle in radians
    setX(x + Math.cos(angleRad));
    setY(y + Math.sin(angleRad));
  };

  // right
  const handleStrSynth = ({ x }) => {
    const plusPos = Math.abs(x);
    if (x < 0 && x > -200) {
      setX(x);
      setY(0);
    }
    if (plusPos < 70 && x < 0) {
      shardTrack.get(instrumentName).volume.value = plusPos;
    }
  };

  // fx1 bottomR

  const handlefx1 = ({ x, y }) => {
    const angle = 32; // angle in degrees
    const angleRad = angle * (Math.PI / 180); // angle in radians
    setX(x + Math.cos(angleRad));
    setY(y + Math.sin(angleRad));
  };

  // bottom
  const handleBassMain = ({ y }) => {
    const plusPos = Math.abs(y);
    if (y < 0 && y > -160) {
      setX(0);
      setY(y);
    }
    if (plusPos < 200 && y < 0) {
      // division means the volume can last for the whole drag
      shardTrack.get(instrumentName).volume.value = plusPos / 2.87;
    }
  };

  // fx2 bottomR
  const handlefx2 = ({ x, y }) => {
    const angle = 32; // angle in degrees
    const angleRad = angle * (Math.PI / 180); // angle in radians
    setX(x + Math.cos(angleRad));
    setY(y + Math.sin(angleRad));
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

  // baseStartMain bottomL
  const handlebaseStartMain = ({ x, y }) => {
    const angle = 32; // angle in degrees
    const angleRad = angle * (Math.PI / 180); // angle in radians
    setX(x + Math.cos(angleRad));
    setY(y + Math.sin(angleRad));
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

  return (
    <>
      {/* //this targets the node to trigger animation */}
      <Layer ref={layerEL}>
        <Group
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
          onDragMove={() => {
            setDrag(true);
          }}
          onDragEnd={() => {
            setDrag(false);
          }}
        >
          {shard.map(({ x, y, data, fill, stroke, strokeWidth, scale }, index) => {
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
              />
            );
          })}
        </Group>
      </Layer>
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
