import React, { useEffect } from 'react';
import Tone from 'tone';
import { Link } from 'react-router-dom';
import Amb from '../../Sounds/LowAmb_V3.mp3';
import styles from './Home.module.scss';
import Logo from './Images/logo.svg';

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
        <Link className={styles.homeContainer__links2} to="/About">
          About | P L U T O N E
        </Link>
      </div>
      <div className={styles.homeContainer__image}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.homeContainer__github}>
        <a href="https://github.com/MScully88">Michael Scully | </a>
        <a href="https://github.com/ctocco">Claudio Tocco</a>
      </div>
    </>
  );
};

export default Home;
