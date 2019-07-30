import React from 'react';
import { Layer, Path } from 'react-konva';

const Moon = ({ moon }) => {
  return (
    <Layer
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
    </Layer>
  );
};

export default Moon;
