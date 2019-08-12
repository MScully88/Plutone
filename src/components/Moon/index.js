import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Path, Group } from 'react-konva';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moving-moons';

const Moon = ({
  moon,
  moonName,
  handlefilterTopL,
  handleflangerTopR,
  handleflangerBottomL,
  handlefilterBottomR,
}) => {
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
  }, [moonName]);

  const getMoonHandler = (moonNameString, pos) => {
    let handler = null;
    if (moonNameString === 'filterTopL') {
      handler = handlefilterTopL(pos);
    }
    if (moonNameString === 'flangerTopR') {
      handler = handleflangerTopR(pos);
    }
    if (moonNameString === 'filterBottomR') {
      handler = handlefilterBottomR(pos);
    }
    if (moonNameString === 'flangerBottomL') {
      handler = handleflangerBottomL(pos);
    }
    return handler;
  };

  return (
    <Group ref={layerEL}>
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
  handlefilterTopL: PropTypes.object,
  handleflangerTopR: PropTypes.object,
  handleflangerBottomL: PropTypes.object,
  handlefilterBottomR: PropTypes.object,
};

export default Moon;
