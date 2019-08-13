import React from 'react';
import styles from './About.module.scss';
import Claudio from './Images/claudio.jpg';
import Michael from './Images/michael.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.about}>
        <h3 className={styles.title}>About | P L U T O N E</h3>
        <h5 className={styles.title2}>About The Project</h5>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <h5 className={styles.title3}>Meet The Team</h5>
        <div className={styles.image}>
          <a href="https://github.com/ctocco">
            <img className={styles.claudio} src={Claudio} alt="Claudio" />
            <div className={styles.overlay}>
              <div className={styles.name}>
                <p>Claudio</p>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.image2}>
          <a href="https://github.com/MScully88">
            <img className={styles.michael} src={Michael} alt="Michael" />
            <div className={styles.overlay2}>
              <div className={styles.name2}>
                <p>Michael</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
