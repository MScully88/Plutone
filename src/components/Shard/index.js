import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Shape.module.scss';

const Shard = ({ shardTrack, instArray, instIndex }) => {
  useEffect(() => {
    shardTrack.get(instArray[instIndex]).start();
  }, [shardTrack, instArray, instIndex]);

  return (
    <div>
      <button type="button" className={styles.color}>
        I'm a shape that is using css modules
      </button>
    </div>
  );
};

Shard.propTypes = {
  shardTrack: PropTypes.object,
  instArray: PropTypes.array,
  instIndex: PropTypes.number,
};

export default Shard;