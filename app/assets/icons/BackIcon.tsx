import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function BackIcon(props: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={props.size} height={props.size}>
      <Path
        d="M328 112L184 256l144 144"
        fill="none"
        stroke={props.color}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth={60}
      />
    </Svg>
  );
}

export default BackIcon;
