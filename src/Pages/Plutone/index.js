import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Stage, Layer, Path } from 'react-konva';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';
import { kickMain, drumsMain } from '../../helpers/shapes';

const Plutone = ({ shardTrack }) => {
  const [instArray] = useState([
    // 'baseStartMain',
    // 'bassMain',
    'drumsMain',
    'kickMain',

    // 'synthStr',
    // 'keysMain',
    // 'fxMain',
  ]);
  const [objectArray] = useState([drumsMain, kickMain]);
  console.log(objectArray);

  // const Shard = ({ shardTrack, instArray, instIndex }) => {
  //   const [shardVolume, setShardVolume] = useState(0);
  //   const [isKickMain, setKickMainValue] = useState(false);

  const handleChange = pos => {
    console.log(pos);
    // const toNumber = parseFloat(event.target.value);
    // setShardVolume(toNumber);
    // shardTrack.get(instArray[instIndex]).volume.value = toNumber;
  };

  //   useEffect(() => {
  //     if (instArray[instIndex] === 'kickMain') {
  //       setKickMainValue(true);
  //       shardTrack.get(instArray[instIndex]).volume.value = 85;
  //     }
  //     // only using this value once
  //     // eslint-disable-next-line
  //   }, []);

  //   useEffect(() => {
  //     Tone.Transport.start();
  //     Tone.Transport.bpm.value = 92;
  //     const track = shardTrack.get(instArray[instIndex]);
  //     // eslint-disable-next-line no-unused-vars
  //     const loop = new Tone.Loop(time => {
  //       track.start();
  //     }, '8m').start(0);
  //   }, [shardTrack, instArray, instIndex]);

  return (
    <>
      <div id={styles.plutoneContainer}>
        <Stage width={700} height={780} className={styles.stageInnerContainer}>
          <Layer
            draggable
            dragBoundFunc={pos => {
              handleChange(pos);
              const x = 0;
              const y = 0;
              const radius = 50;
              const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
              if (scale < 1) {
                return {
                  y: Math.round((pos.y - y) * scale + y),
                  x: Math.round((pos.x - x) * scale + x),
                };
              }
              return pos;
            }}
            className={styles.shapeLayer}
          >
            <Path
              // ref={}
              scale={{
                x: 0.1,
                y: 0.1,
              }}
              data="M39.5555 651.021L53.1357 596.916L163.322 583.963L139.378 537.345L236.134 321.596L1877.96 425.732L1655.23 597.128L1413.01 579.557L1425.87 617.642L1814.5 726.732L1905.82 865.335L1739.8 878.523L1591 1108.5L715.603 938.468L138.131 826.346L242.558 726.732L32.7242 678.238L39.5555 651.021Z"
              fill="#00D2FF"
              stroke="black"
              strokeWidth={3}
            />
            <Path
              scale={{
                x: 0.1,
                y: 0.1,
              }}
              data="M39.5555 651.021L53.1357 596.916L163.322 583.963L139.378 537.345L236.134 321.596L1877.96 425.732L1655.23 597.128L1413.01 579.557L1425.87 617.642L1814.5 726.732L1905.82 865.335L1739.8 878.523L1591 1108.5L715.603 938.468L138.131 826.346L242.558 726.732L32.7242 678.238L39.5555 651.021Z"
              fill="#00D2FF"
              stroke="black"
              strokeWidth={3}
            />
          </Layer>
          {instArray.map((instrument, index) => {
            return (
              <Shard
                instIndex={index}
                instArray={instrument}
                shardTrack={shardTrack}
                shape={objectArray}
              />
            );
          })}
        </Stage>
      </div>
    </>
  );
};

Plutone.propTypes = {
  shardTrack: PropTypes.object,
};

export default Plutone;
