import React from 'react';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.h1}>
        <h1 data-text="L O A D I N G">L O A D I N G</h1>
      </div>
      <div className={styles.loading}>
        <div className={styles.loadingBar} />
        <div className={styles.loadingBar} />
        <div className={styles.loadingBar} />
        <div className={styles.loadingBar} />
      </div>
    </div>
  );
}

export default Loading;
