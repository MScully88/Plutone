/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Tone from 'tone';
import { Stage, Layer } from 'react-konva';
import styles from './Plutone.module.scss';
import Shard from '../../components/Shard';
import {
  kickMain,
  drumsMain,
  keysMain,
  bassMain,
  synthStr,
  baseStartMain,
  fx1,
  fx2,
  solo,
} from '../../helpers/shapes';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moons';
import Moon from '../../components/Moon';

const Plutone = ({ shardTrack }) => {
  const [instrumentArray] = useState([
    'drumsMain', // top
    'solo', // topR
    'synthStr', // right
    'fx1', // bottomR
    'bassMain', // bottom
    'fx2', // bottomL
    'keysMain', // left
    'baseStartMain', // topL
    'kickMain', // centre
  ]);
  const [objectArray] = useState([
    drumsMain,
    solo,
    synthStr,
    fx1,
    bassMain,
    fx2,
    keysMain,
    baseStartMain,
    kickMain,
  ]);
  // storing the Tone Effect Object to be manipulated later
  const [pingPongAmount, setPingPongAmount] = useState(0);
  const [chorusAmount, setChorusAmount] = useState(0);
  const [jcReverbAmount, setjcReverbAmount] = useState(0);
  const [pitchAmount, setPitchAmount] = useState(0);

  const [moonArray] = useState([filterTopL, flangerTopR, filterBottomR, flangerBottomL]);
  const [moonName] = useState(['filterTopL', 'flangerTopR', 'filterBottomR', 'flangerBottomL']);

  const [isMuted, setMuted] = useState(false);

  useEffect(() => {
    const pingPong = new Tone.PingPongDelay('4n', 0.2).toMaster();
    setPingPongAmount(pingPong);
    pingPong.wet.value = 0;
    const newPingPong = shardTrack.connect(pingPong).toMaster();
  }, [shardTrack]);

  const handlefilterTopL = ({ x }) => {
    const calcfx1 = Math.abs(x) * 0.1;
    const parsed = parseFloat(calcfx1).toFixed(2);
    if (parsed <= 1) {
      pingPongAmount.wet.value = 1;
    }
    if (parsed > 1) {
      pingPongAmount.wet.value = 0;
    }
  };

  useEffect(() => {
    const chorus = new Tone.AutoWah({
      baseFrequency: 50,
      octaves: 6,
      sensitivity: -20,
      Q: 8,
      gain: 0,
      follower: {
        attack: 0.2,
        release: 1,
      },
    }).toMaster();
    setChorusAmount(chorus);
    chorus.wet.value = 0;
    const newChorus = shardTrack.connect(chorus).toMaster();
  }, [shardTrack]);

  const handleflangerTopR = ({ x }) => {
    const calcfx1 = Math.abs(x) * 0.1;
    const parsed = parseFloat(calcfx1).toFixed(2);
    if (parsed > 1) {
      chorusAmount.wet.value = 0;
    }
    if (parsed < 1) {
      chorusAmount.wet.value = 1;
    }
  };

  useEffect(() => {
    const jcReverb = new Tone.JCReverb(0.7).toMaster();
    setjcReverbAmount(jcReverb);
    jcReverb.wet.value = 0;
    const newjcReverb = shardTrack.connect(jcReverb).toMaster();
  }, [shardTrack]);

  const handlefilterBottomR = ({ x }) => {
    const calcfx1 = Math.abs(x) * 0.1;
    const parsed = parseFloat(calcfx1).toFixed(2);
    if (parsed > 1) {
      jcReverbAmount.wet.value = 0;
    }
    if (parsed < 1) {
      jcReverbAmount.wet.value = 1;
    }
  };

  useEffect(() => {
    const pitchShift = new Tone.PitchShift(9).toMaster();
    setPitchAmount(pitchShift);
    pitchShift.wet.value = 0;
    const newPitchShift = shardTrack.connect(pitchShift).toMaster();
  }, [shardTrack]);

  const handleflangerBottomL = ({ x }) => {
    const calcfx1 = Math.abs(x) * 0.1;
    const parsed = parseFloat(calcfx1).toFixed(2);
    if (parsed > 1) {
      pitchAmount.wet.value = 0;
    }
    if (parsed < 1) {
      pitchAmount.wet.value = 1;
    }
  };

  return (
    <>
      <div id={styles.plutoneContainer} className={styles.stars}>
        <Stage width={780} height={820} className={styles.stageInnerContainer}>
          <Layer>
            {moonArray.map((moon, index) => {
              return (
                <Moon
                  key={uuid(index)}
                  moon={moon}
                  moonName={moonName[index]}
                  shardTrack={shardTrack}
                  handlefilterTopL={handlefilterTopL}
                  handleflangerTopR={handleflangerTopR}
                  handlefilterBottomR={handlefilterBottomR}
                  handleflangerBottomL={handleflangerBottomL}
                />
              );
            })}

            {instrumentArray.map((instrument, index) => {
              return (
                <Shard
                  key={uuid(index)}
                  instrumentIndex={index}
                  instrumentName={instrument}
                  shardTrack={shardTrack}
                  shapeObject={objectArray}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

Plutone.propTypes = {
  instrumentName: PropTypes.string,
  shardTrack: PropTypes.object,
  shapeObject: PropTypes.object,
};

export default Plutone;
