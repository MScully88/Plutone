import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
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
