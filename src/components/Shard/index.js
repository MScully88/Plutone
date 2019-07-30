/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import { Group, Layer, Path } from 'react-konva';
import Konva from 'konva';
import { moveShard1 } from '../../context/moving-shapes';
// import styles from './Shard.module.scss';

const Shard = ({ shardTrack, instrumentName, instrumentIndex, shapeObject }) => {
  // eslint-disable-next-line no-unused-vars
  const [isKickMain, setKickMainValue] = useState(false);
  // setting x and y dependent on what handle is being triggered
  const [isX, setX] = useState(null);
  const [isY, setY] = useState(null);
  const inputEL = useRef(null);
  const layerEL = useRef(null);
  // Array of objects with the paths for each layer
  const shard = shapeObject[instrumentIndex];
  const maxVolume = 70;

  // const { sounds, setSounds } = useContext(SoundContext);

  useEffect(() => {
    if (instrumentName === 'kickMain') {
      setKickMainValue(true);
      shardTrack.get(instrumentName).volume.value = maxVolume;
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    moveShard1(inputEL.current, layerEL.current);
  }, []);

  useEffect(() => {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 92;
    const track = shardTrack.get(instrumentName);
    // eslint-disable-next-line no-unused-vars
    const loop = new Tone.Loop(time => {
      track.start();
    }, '8m').start(0);
  }, [shardTrack, instrumentName, instrumentIndex]);

  const handleKeysMain = ({ x }) => {
    if (x < 178 && x > 0) {
      setX(x);
      setY(0);
    }
    if (x < maxVolume) {
      shardTrack.get(instrumentName).volume.value = x;
    }
  };

  const handleStrSynth = ({ x }) => {
    const plusPos = Math.abs(x);
    if (x < 0 && x > -150) {
      setX(x);
      setY(0);
    }
    if (plusPos < 70 && x < 0) {
      shardTrack.get(instrumentName).volume.value = plusPos;
    }
  };

  const handleDrumsMain = ({ y }) => {
    if (y > 0 && y < 178) {
      setX(0);
      setY(y);
    }
    if (y < maxVolume) {
      shardTrack.get(instrumentName).volume.value = y;
    }
  };

  const handleBassMain = ({ y }) => {
    const plusPos = Math.abs(y);
    if (y < 0 && y > -200) {
      setX(0);
      setY(y);
    }
    if (plusPos < 70 && y < 0) {
      shardTrack.get(instrumentName).volume.value = plusPos;
    }
  };

  const getSoundHandler = soundName => {
    let handler = null;
    if (soundName === 'keysMain') {
      handler = handleKeysMain;
    }
    if (soundName === 'synthStr') {
      handler = handleStrSynth;
    }
    if (soundName === 'drumsMain') {
      handler = handleDrumsMain;
    }
    if (soundName === 'bassMain') {
      handler = handleBassMain;
    }
    return handler;
  };

  return (
    <>
      <Layer
        ref={layerEL}
        draggable
        dragBoundFunc={pos => {
          let coordinates = null;
          if (instrumentName !== 'kickMain') {
            getSoundHandler(instrumentName)(pos);
            coordinates = {
              x: isX,
              y: isY,
            };
          }
          return coordinates;
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
