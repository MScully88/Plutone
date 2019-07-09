import React, { useState } from 'react';
import styles from './Plutone.module.scss';
import Shape from '../../components/Shape';

const Plutone = ({ stems }) => {
  const [instArray, setinstArray] = useState(['bassMain', 'synthStr', 'keysMain']);

  return (
    <div className={styles.block}>
      {instArray.map((inst, index) => {
        return <Shape key={index} stems={stems} instArray={inst[index]} />;
      })}
    </div>
  );
};

export default Plutone;
