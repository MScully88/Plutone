import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <h3>P L U T O N E | Welcome</h3>
      </div>
      <div className={styles.home}>
        <Link to="/Plutone">E N T E R</Link>
      </div>
    </>
  );
};

export default Home;
