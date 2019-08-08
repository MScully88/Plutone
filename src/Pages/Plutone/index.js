import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Stage, Layer } from 'react-konva';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';
import {
  kickMain,
  drumsMain,
  keysMain,
  bassMain,
  synthStr,
  baseStartMain,
  fx1,
  fx2,
  solo,
} from '../../helpers/shapes';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moons';
import Moon from '../../components/Moon';

const Plutone = ({ shardTrack }) => {
  const [instrumentArray] = useState([
    'drumsMain', // top
    'solo', // topR
    'synthStr', // right
    'fx1', // bottomR
    'bassMain', // bottom
    'fx2', // bottomL
    'keysMain', // left
    'baseStartMain', // topL
    'kickMain', // centre
  ]);
  const [objectArray] = useState([
    drumsMain,
    solo,
    synthStr,
    fx1,
    bassMain,
    fx2,
    keysMain,
    baseStartMain,
    kickMain,
  ]);

  const [moonArray] = useState([filterTopL, flangerTopR, filterBottomR, flangerBottomL]);
  const [moonName] = useState(['filterTopL', 'flangerTopR', 'filterBottomR', 'flangerBottomL']);
  const [containerScale, setContainerScale] = useState(null);
  const fitStageIntoParentContainer = () => {
    const CANVAS_VIRTUAL_WIDTH = 780;
    const CANVAS_VIRTUAL_HEIGHT = 820;
    // now you may want to make it visible even on small screens
    // we can just scale it
    const scale = Math.min(
      window.innerWidth / CANVAS_VIRTUAL_WIDTH,
      window.innerHeight / CANVAS_VIRTUAL_HEIGHT,
    );
    setContainerScale(scale);
  };

  const toggle = () => {
    if (window.innerWidth < 780) {
      fitStageIntoParentContainer();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      toggle();
    });
  });

  return (
    <>
      <div id={styles.plutoneContainer} className={styles.stars}>
        <Stage width={780} height={820} className={styles.stageInnerContainer}>
          <Layer>
            {moonArray.map((moon, index) => {
              return <Moon key={uuid(index)} moon={moon} moonName={moonName[index]} />;
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
          </Layer>
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
