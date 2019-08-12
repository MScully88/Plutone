import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
      </nav>
      <div className={styles.splash}>
        <h1>About</h1>
        <quote>
          “The internet can seem like a mall at times, we need more spaces like parks and oceans”. –
          Ruth John
        </quote>
      </div>
      <section>
        <h2>What is it?</h2>
        <p>
          Plutone is a project created by Michael and Claudio.Plutone is an experiment that aims to
          bring audio and visuals together, creating an interactive soundscape experience through
          the browser. The musical planet Plutone has been split into mutliple pieces and has been
          spread throughout space. Bring all of the pieces back together to return Plutone to its
          former glory.
        </p>
      </section>
      <section>
        <h2>The Team</h2>
        <h2>Claudio Tocco</h2>
        <h2>Michael Scully</h2>
      </section>
    </div>
  );
};

export default About;
