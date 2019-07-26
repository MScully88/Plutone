import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import { Layer, Path } from 'react-konva';
// import styles from './Shard.module.scss';
// import Center from './Images/center.svg';

const Shard = ({ shardTrack, instArray, instIndex, shape }) => {
  console.log(shardTrack);
  const [shardVolume, setShardVolume] = useState(0);
  const [isKickMain, setKickMainValue] = useState(false);
  const shard = shape[instIndex];

  //   const handleChange = event => {
  //     //   const toNumber = parseFloat(event.target.value);
  //     //   setShardVolume(70);
  //     shardTrack.get(instArray[instIndex]).volume.value = 70;
  //   };
  //   useEffect(() => {
  //     if (instArray === 'kickMain') {
  //       //   setKickMainValue(true);
  //       shardTrack.get(instArray).volume.value = 70;
  //     }
  //     // only using this value once
  //     // eslint-disable-next-line
  //   }, []);

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
      <Layer draggable>
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

// Shard.propTypes = {
//   shardTrack: PropTypes.object,
//   instArray: PropTypes.array,
//   instIndex: PropTypes.number,
// };

export default Shard;
