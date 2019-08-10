import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Tone from 'tone';
import { Path, Group } from 'react-konva';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moving-moons';

const Moon = ({ moon, moonName, shardTrack, handlefilterTopL, handleflangerTopR }) => {
  const [fx1Amount, setfx1Amount] = useState(0);

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

  const handlefilterBottomR = ({ x }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      // setWetPingPong(filterX);
    }
  };

  const handleflangerBottomL = ({ x }) => {
    const filterX = Math.abs(x) * 0.01;
    if (x < 1) {
      // setWetPingPong(filterX);
    }
  };

  const getMoonHandler = (moonNameString, pos) => {
    let handler = null;
    if (moonNameString === 'filterTopL') {
      handler = handlefilterTopL(pos);
    }
    if (moonNameString === 'flangerTopR') {
      handler = handleflangerTopR(pos);
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
    <Group ref={layerEL} fx1Value={fx1Amount}>
      <Group
        draggable
        dragBoundFunc={pos => {
          const x = 0;
          const y = 0;
          const radius = 25;
          const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
          if (scale < 1) {
            return {
              y: Math.round((pos.y - y) * scale + y),
              x: Math.round((pos.x - x) * scale + x),
            };
          }
          getMoonHandler(moonName, pos);
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
    </Group>
  );
};

Moon.propTypes = {
  moon: PropTypes.array,
  moonName: PropTypes.string,
  shardTrack: PropTypes.object,
};

export default Moon;
