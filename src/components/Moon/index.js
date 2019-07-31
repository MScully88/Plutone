import React, { useState, useEffect, useRef } from 'react';
import { Layer, Path, Group } from 'react-konva';
import { filterTopL, flangerTopR, filterBottomR, flangerBottomL } from '../../helpers/moving-moons';

const Moon = ({ moon, moonName }) => {
  console.log(moonName);
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
  return (
    <Layer ref={layerEL}>
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
          return pos;
        }}
      >
        {moon.map(({ x, y, data, fill, stroke, strokeWidth, scale }, index) => {
          return (
            <Path
              key={`${index}_MOON`}
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
