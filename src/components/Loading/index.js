import React from 'react';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__elem__title} data-text="L O A D I N G">
        L O A D I N G
      </h1>
      <div className={styles.block__elem__loadBars}>
        <div className={styles.block__elem__loadingBar} />
        <div className={styles.block__elem__loadingBar} />
        <div className={styles.block__elem__loadingBar} />
        <div className={styles.block__elem__loadingBar} />
      </div>
    </div>
  );
}

export default Loading;
