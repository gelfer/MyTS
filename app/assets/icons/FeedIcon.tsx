import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function FeedIcon(props: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={props.size} height={props.size}>
      <Rect y={64} x={56} height={98} width={407} fill={props.color} />
      <Rect y={183} x={104} height={25} width={359} fill={props.color} />
      <Rect y={285} x={104} height={98} width={359} fill={props.color} />
      <Rect y={405} x={147} height={25} width={317} fill={props.color} />
    </Svg>
  );
}

export default FeedIcon;
