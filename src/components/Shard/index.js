import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Shape.module.scss';

const Shard = ({ songStems, instArray, instIndex }) => {
  useEffect(() => {
    songStems.get(instArray[instIndex]).start();
  }, [songStems, instArray, instIndex]);

  return (
    <div>
      <button type="button" className={styles.color}>
        I'm a shape that is using css modules
      </button>
    </div>
  );
};

Shard.propTypes = {
  songStems: PropTypes.object,
  instArray: PropTypes.array,
  instIndex: PropTypes.number,
};

export default Shard;
