import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid/v1';
import Tone from 'tone';
import { Layer, Path, Group } from 'react-konva';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moving-moons';
import Shard from '../Shard';

const Moon = ({ moon, moonName, shardTrack }) => {
  const [filter, setFilter] = useState(null);
  const [wetPingPong, setWetPingPong] = useState(0);

  useEffect(() => {
    const filter = new Tone.Filter(1000, 'highpass').toMaster();
    // filter.start()
    const wet = new Tone.Effect(0.5);
    const track = filter.chain(wet, Tone.Master);
  }, []);

  const layerEL = useRef(null);
  useEffect(() => {
    if (moonName === 'filterTopL') {
      filterTopL(layerEL.current);
    }
    if (moonName === 'flangerTopR') {
      flangerTopR(layerEL.current);
    }
    if (moonName === 'filterBottomR') {
      filterBottomR(layerEL.current);
    }
    if (moonName === 'flangerBottomL') {
      flangerBottomL(layerEL.current);
    }
  }, []);

  const handlefilterTopL = ({ x, y }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      setWetPingPong(filterX);
    }
  };

  const handleflangerTopR = ({ x, y }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      setWetPingPong(filterX);
    }
  };

  const handlefilterBottomR = ({ x, y }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      setWetPingPong(filterX);
    }
  };

  const handleflangerBottomL = ({ x, y }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      setWetPingPong(filterX);
    }
  };

  const getMoonHandler = moonNameString => {
    let handler = null;
    if (moonNameString === 'filterTopL') {
      handler = handlefilterTopL;
    }
    if (moonNameString === 'flangerTopR') {
      handler = handleflangerTopR;
    }
    if (moonNameString === 'filterBottomR') {
      handler = handlefilterBottomR;
    }
    if (moonNameString === 'flangerBottomL') {
      handler = handleflangerBottomL;
    }
    return handler;
  };

  return (
    <Layer ref={layerEL}>
      <Group
        draggable
        dragBoundFunc={pos => {
          const x = 0;
          const y = 0;
          const radius = 25;
          const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
          getMoonHandler(moonName)(pos);
          if (scale < 1) {
            return {
              y: Math.round((pos.y - y) * scale + y),
              x: Math.round((pos.x - x) * scale + x),
            };
          }
          return pos;
        }}
      >
        {moon.map(({ x, y, data, fill, stroke, strokeWidth, scale }, index) => {
          return (
            <Path
              key={uuid(index)}
              x={x}
              y={y}
              data={data}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              scale={scale}
            />
          );
        })}
      </Group>
    </Layer>
  );
};

export default Moon;
