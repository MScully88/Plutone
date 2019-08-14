import React from 'react';
import styles from './About.module.scss';
import Claudio from './Images/claudio.jpg';
import Michael from './Images/michael.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>About | P L U T O N E</h3>
        </div>

        <div className={styles.imageTextContainer}>
          <div className={styles.aboutProjectContainer}>
            <h5 className={styles.aboutTitle}>
              <strong>About The Project</strong>
            </h5>
            <div className={styles.text}>
              <quote>
                “The internet can seem like a mall at times, we need more spaces like parks and
                oceans”. – Ruth John
              </quote>
              <p>
                Created over the course of seven weeks, Plutone is an experiment that aims to bring
                audio and visuals together, creating an interactive soundscape experience through
                the browser. This was our graduating project at Digital Career Institute where we
                embarked on a year long web development course finishing in August 2019.
              </p>
              <p>
                <strong>Instructions:</strong> The musical planet Plutone has been split into
                multiple pieces and has been spread throughout space. Bring all of the pieces of the
                planet back to the center to return Plutone to its former glory. Move the moons
                around to hear musical effects applied to the song like room reverb or ping pong.
              </p>
            </div>
          </div>
          <div className={styles.teamContainer}>
            <h5 className={styles.teamTitle}>Meet The Team</h5>
            <div className={styles.teamCardContainer}>
              <div className={styles.teamCard}>
                <img className={styles.claudio} src={Claudio} alt="Claudio" />
                <div className={styles.claudioContainer}>
                  <h4>Claudio Tocco</h4>
                  <a className={styles.links} href="https://github.com/ctocco">
                    Github
                  </a>
                  <a
                    className={styles.links}
                    href="https://www.linkedin.com/in/claudio-tocco-berlin/"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <img className={styles.michael} src={Michael} alt="Michael" />
                <div className={styles.michaelContainer}>
                  <h4>Michael Scully</h4>
                  <a className={styles.links} href="https://github.com/MScully88">
                    Github
                  </a>
                  <a
                    className={styles.links}
                    href="https://www.linkedin.com/in/michael-joseph-scully"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
