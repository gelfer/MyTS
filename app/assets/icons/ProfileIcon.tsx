import React from 'react';
import Svg, {Rect, Path, Ellipse} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function ProfileIcon(props: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={props.size} height={props.size}>
      <Ellipse ry={95} rx={95} cy={140} cx={260} fill={props.color} />
      <Rect
        ry={31}
        y={252}
        x={80}
        height={230}
        width={358}
        fill={props.color}
      />
    </Svg>
  );
}

export default ProfileIcon;
