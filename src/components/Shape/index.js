import React, { useEffect } from 'react';
import styles from './Shape.module.scss';

function index({ stems, instArray }) {
  console.log(stems, instArray);
  return (
    <div>
      <button className={styles.color}>I'm a shape that is using css modules</button>
    </div>
  );
}

export default index;
