import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import styles from './Shard.module.scss';

const Shard = ({ shardTrack, instArray, instIndex }) => {
  const [shardVolume, setShardVolume] = useState(0);
  const [isKickMain, setKickMainValue] = useState(false);

  const handleChange = event => {
    const toNumber = parseFloat(event.target.value);
    setShardVolume(toNumber);
    shardTrack.get(instArray[instIndex]).volume.value = toNumber;
  };

  useEffect(() => {
    if (instArray[instIndex] === 'kickMain') {
      setKickMainValue(true);
      shardTrack.get(instArray[instIndex]).volume.value = 85;
    }
    // only using this value once
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    Tone.Transport.start();
    Tone.Transport.bpm.value = 92;
    const track = shardTrack.get(instArray[instIndex]);
    // eslint-disable-next-line no-unused-vars
    const loop = new Tone.Loop(time => {
      track.start();
    }, '8m').start(0);
  }, [shardTrack, instArray, instIndex]);

  return (
    <>
      <div className={styles.slideContainer}>
        {isKickMain ? (
          <input
            className={styles.kickMain}
            defaultValue={shardVolume}
            type="button"
            min="0"
            max="85"
            onChange={handleChange}
            step="2"
          />
        ) : (
          <input
            className={styles.slider}
            defaultValue={shardVolume}
            type="range"
            min="0"
            max="85"
            onChange={handleChange}
            step="2"
          />
        )}
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
