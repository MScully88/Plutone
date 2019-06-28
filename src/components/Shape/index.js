import React, { useState } from 'react';
import Tone from 'tone';
import styles from './Shape.module.scss';

const index = () => {
  const keys = () => {
    const synth = new Tone.Synth().toMaster();
    // play a middle 'C' for the duration of an 8th note
    const loop = new Tone.Loop(time => {
      synth.triggerAttackRelease('C2', '8n', time);
    }, '4n');
    loop.start('0m').stop('4m');
    Tone.Transport.start();
  };
  return (
    <div>
      <button type="button" onClick={keys}>
        Fire Keys
      </button>
      <p className={styles.color}>I'm a shape that is using css modules</p>
    </div>
  );
};

export default index;
