import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';

const Plutone = ({ shardTrack }) => {
  const [instArray] = useState([
    'baseStartMain',
    'bassMain',
    'kickMain',
    'drumsMain',
    'synthStr',
    'keysMain',
    'fxMain',
  ]);

  return (
    <div id="plutoneContainer" className={styles.plutoneContainer}>
      {instArray.map((inst, index) => {
        return (
          <div className={styles.shard}>
            <Shard key={uuid()} instIndex={index} shardTrack={shardTrack} instArray={instArray} />
          </div>
        );
      })}
    </div>
  );
};

Plutone.propTypes = {
  shardTrack: PropTypes.object,
};

export default Plutone;
