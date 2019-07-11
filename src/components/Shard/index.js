import React, { useEffect } from 'react';
import Tone from 'tone';
import PropTypes from 'prop-types';
import styles from './Shard.module.scss';

const Shard = ({ shardTrack, instArray, instIndex }) => {
  const playSoundOnClick = () => {
    const vol = new Tone.Volume(0);
    shardTrack.get(instArray[instIndex]).chain(vol, Tone.Master);
  };

  useEffect(() => {
    const track = shardTrack.get(instArray[instIndex]);
    track.start();
  }, [shardTrack, instArray, instIndex]);

  return (
    <>
      <div className={styles.slideContainer}>
        <input
          type="range"
          min="1"
          max="100"
          value="1"
          className={styles.slider}
          id="myRange"
          onClick={playSoundOnClick}
        />
      </div>
    </>
  );
};

Shard.propTypes = {
  shardTrack: PropTypes.object,
  instArray: PropTypes.array,
  instIndex: PropTypes.number,
};

export default Shard;
