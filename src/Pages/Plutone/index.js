import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Stage } from 'react-konva';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';
import { kickMain, drumsMain, keysMain, bassMain, synthStr } from '../../helpers/shapes';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moons';
import Moon from '../../components/Moon';

const Plutone = ({ shardTrack }) => {
  const [instrumentArray] = useState([
    // 'baseStartMain',
    // 'fxMain',
    'drumsMain', // top
    'keysMain', // left
    'bassMain', // bottom
    'synthStr', // right
    'kickMain', // centre
  ]);
  const [objectArray] = useState([drumsMain, keysMain, bassMain, synthStr, kickMain]);
  const [moonArray] = useState([filterTopL, flangerTopR, filterBottomR, flangerBottomL]);

  return (
    <>
      <div id={styles.plutoneContainer}>
        <Stage width={700} height={780} className={styles.stageInnerContainer}>
          {moonArray.map((moon, index) => {
            return <Moon key={uuid(index)} moon={moon} />;
          })}
          {instrumentArray.map((instrument, index) => {
            return (
              <Shard
                key={uuid(index)}
                instrumentIndex={index}
                instrumentName={instrument}
                shardTrack={shardTrack}
                shapeObject={objectArray}
              />
            );
          })}
        </Stage>
      </div>
    </>
  );
};

Plutone.propTypes = {
  instrumentName: PropTypes.string,
  shardTrack: PropTypes.object,
  shapeObject: PropTypes.object,
};

export default Plutone;
