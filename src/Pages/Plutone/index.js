import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';

const Plutone = ({ songStems }) => {
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
        return <Shard key={uuid()} instIndex={index} songStems={songStems} instArray={instArray} />;
      })}
    </div>
  );
};

Plutone.propTypes = {
  songStems: PropTypes.object,
};

export default Plutone;
