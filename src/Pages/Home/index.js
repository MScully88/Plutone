import React, { useEffect } from 'react';
import Tone from 'tone';
import { Link } from 'react-router-dom';
import Amb from '../../Sounds/LowAmb.wav';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    const buffer = new Tone.Buffer(Amb);
    // eslint-disable-next-line
    const player = new Tone.Player({
      url: buffer,
      autostart: true,
      loop: false,
      fadeIn: 0,
      fadeOut: 3,
      volume: -10,
    }).toMaster();
  }, []);

  return (
    <>
      <div className={styles.homeContainer}>
        <h3 className={styles.homeContainer__title}>P L U T O N E | Welcome</h3>
      </div>
      <div className={styles.homeContainer}>
        <Link className={styles.homeContainer__links} to="/Plutone">
          E N T E R
        </Link>
      </div>
    </>
  );
};

export default Home;
