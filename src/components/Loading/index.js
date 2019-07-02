import React from 'react';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.splashContainer}>
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
