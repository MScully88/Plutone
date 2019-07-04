import React, { useEffect, useState } from 'react';
import Tone from 'tone';
import { Link } from 'react-router-dom';
import Amb from '../../Sounds/LowAmb.wav';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    const buffer = new Tone.Buffer(Amb);
    const player = new Tone.Player({
      url: buffer,
      autostart: true,
      loop: false,
      fadeIn: 3,
      fadeOut: 3,
      volume: -20,
    }).toMaster();
  }, []);

  return (
    <>
      <div className={styles.block}>
        <h3 className={styles.block__elem__title}>P L U T O N E | Welcome</h3>
      </div>
      <div className={styles.block}>
        <Link className={styles.block__elem__links} to="/Plutone">
          E N T E R
        </Link>
      </div>
    </>
  );
};

export default Home;
