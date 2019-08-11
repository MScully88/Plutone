import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.scss';

const About = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>About</h1>
      <section>
        <p>Plutone is a project created by Michael and Claudio.</p>
      </section>
      <section>
        <h2>Claudio Tocco</h2>
        <h2>Michael Scully</h2>
      </section>
    </div>
  );
};

export default About;
