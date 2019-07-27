import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import { Layer, Path } from 'react-konva';
// import styles from './Shard.module.scss';
// import Center from './Images/center.svg';

const Shard = ({ shardTrack, instArray, instIndex, shape }) => {
  const [shardVolume, setShardVolume] = useState(0);
  const [isKickMain, setKickMainValue] = useState(false);
  // setting x and y dependent on what handle is being triggered
  const [isX, setX] = useState(null);
  const [isY, setY] = useState(null);

  // this is getting the objects using index
  const shard = shape[instIndex];
  // this is getting the name for conditional movement
  const instValue = instArray;

  useEffect(() => {
    if (instArray === 'kickMain') {
      setKickMainValue(true);
      shardTrack.get(instArray).volume.value = 70;
    }
    // only using this value once
    // eslint-disable-next-line
  }, []);

  const handleKeysMain = pos => {
    if (pos < 178 && pos > 0) {
      setX(pos);
      setY(0);
    }
    if (pos < 70) {
      shardTrack.get(instArray).volume.value = pos;
    }
  };

  const handleStrSynth = pos => {
    const plusPos = Math.abs(pos);
    if (pos < 0 && pos > -150) {
      setX(pos);
      setY(0);
    }
    if (plusPos < 70 && pos < 0) {
      shardTrack.get(instArray).volume.value = plusPos;
    }
  };

  const handleDrumsMain = pos => {
    if (pos > 0 && pos < 178) {
      setX(0);
      setY(pos);
    }
    if (pos < 70) {
      shardTrack.get(instArray).volume.value = pos;
    }
  };

  const handleBassMain = pos => {
    const plusPos = Math.abs(pos);
    if (pos < 0 && pos > -200) {
      setX(0);
      setY(pos);
    }
    if (plusPos < 70 && pos < 0) {
      shardTrack.get(instArray).volume.value = plusPos;
    }
  };

  useEffect(() => {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 92;
    const track = shardTrack.get(instArray);
    // eslint-disable-next-line no-unused-vars
    const loop = new Tone.Loop(time => {
      track.start();
    }, '8m').start(0);
  }, [shardTrack, instArray, instIndex]);

  return (
    <>
      <Layer
        draggable
        dragBoundFunc={pos => {
          if (instValue === 'keysMain') {
            handleKeysMain(pos.x);
          }
          if (instValue === 'synthStr') {
            handleStrSynth(pos.x);
          }
          if (instValue === 'drumsMain') {
            handleDrumsMain(pos.y);
          }
          if (instValue === 'bassMain') {
            handleBassMain(pos.y);
          }
          return {
            x: isX,
            y: isY,
          };
        }}
      >
        {shard.map(({ x, y, data, fill, stroke, strokeWidth, scale }) => {
          return (
            <Path
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
  shardTrack: PropTypes.object,
  instArray: PropTypes.array,
  instIndex: PropTypes.number,
};

export default Shard;
