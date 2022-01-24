import React from 'react';
import Svg, {Rect, Circle, Ellipse} from 'react-native-svg';

function Radar() {
  return (
    <Svg viewBox="0 0 350 350" width={350} height={350}>
      <Rect width="350" height="350" fill="none" />
      <Circle cx="175.5" cy="175.5" r="160.5" fill="#FFF2DF" />
      <Ellipse cx="175" cy="175.5" rx="140" ry="144.5" fill="#FFE8C6" />
      <Ellipse cx="175.5" cy="175" rx="119.5" ry="125" fill="#FFDDAB" />
    </Svg>
  );
}

export default Radar;
