import React from 'react';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <h1 className={styles.loadingContainer__title}>LOADING</h1>
      <div className={styles.loadingContainer__loadBars}>
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
        <div className={styles.loadingContainer__loadingBar} />
      </div>
    </div>
  );
}

export default Loading;
