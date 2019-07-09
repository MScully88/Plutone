import React, { useEffect } from 'react';
import styles from './Shape.module.scss';

function index({ songStems, instArray }) {
  console.log('shape', songStems, instArray);
  return (
    <div>
      <button className={styles.color}>I'm a shape that is using css modules</button>
    </div>
  );
}

export default index;
