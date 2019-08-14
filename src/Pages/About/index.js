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
          <quote>
            “The internet can seem like a mall at times, we need more spaces like parks and oceans”.
            – Ruth John
          </quote>
          <p>
            Created over the course of seven weeks, Plutone is an experiment that aims to bring
            audio and visuals together, creating an interactive soundscape experience through the
            browser. This was our graduating project at Digital Career Institute where we embarked
            on a year long web development course finishing in August 2019.
          </p>
          <p>
            <strong>Instructions:</strong> The musical planet Plutone has been split into multiple
            pieces and has been spread throughout space. Bring all of the pieces of the planet back
            to the center to return Plutone to its former glory. Move the moons around to hear
            musical effects applied to the song like room reverb or ping pong
          </p>
        </div>
        <h5 className={styles.title3}>Meet The Team</h5>
        <div className={styles.image}>
          <a href="https://github.com/ctocco">
            <img className={styles.claudio} src={Claudio} alt="Claudio" />
          </a>
        </div>
        <div className={styles.image2}>
          <a href="https://github.com/MScully88">
            <img className={styles.michael} src={Michael} alt="Michael" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
