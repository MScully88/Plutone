import React, { useState } from 'react';
import styles from './Plutone.module.scss';
import Shape from '../../components/Shape';

const Plutone = ({ songStems }) => {
  console.log('plunton', songStems);
  const [instArray, setinstArray] = useState(['bassMain', 'synthStr', 'keysMain']);

  return (
    <div className={styles.block}>
      {instArray.map((inst, index) => {
        return <Shape key={index} songStems={songStems} instArray={instArray} />;
      })}
    </div>
  );
};

export default Plutone;
