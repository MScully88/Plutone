import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import uuid from 'uuid/v3';
import { Stage } from 'react-konva';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';
import { kickMain, drumsMain, keysMain, bassMain, synthStr } from '../../helpers/shapes';

const Plutone = ({ shardTrack }) => {
  const [instArray] = useState([
    // 'baseStartMain',
    // 'fxMain',
    'drumsMain', // top
    'keysMain', // left
    'bassMain', // bottom
    'synthStr', // right
    'kickMain', // centre
  ]);
  const [objectArray] = useState([drumsMain, keysMain, bassMain, synthStr, kickMain]);

  return (
    <>
      <div id={styles.plutoneContainer}>
        <Stage width={700} height={780} className={styles.stageInnerContainer}>
          {instArray.map((instrument, index) => {
            return (
              <Shard
                key={index}
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

// <Layer
// draggable
// dragBoundFunc={pos => {
//   // handleChange(pos);
//   const x = 0;
//   const y = 0;
//   const radius = 50;
//   const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
//   if (scale < 1) {
//     return {
//       y: Math.round((pos.y - y) * scale + y),
//       x: Math.round((pos.x - x) * scale + x),
//     };
//   }
//   return pos;
// }}
// className={styles.shapeLayer}
// >
// put moon here
// </Layer>
