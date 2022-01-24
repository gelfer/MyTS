import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function HomeIcon(props: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={props.size} height={props.size}>
      <Path
        d="M246.827 28.7426C253.23 23.1598 262.77 23.1598 269.173 28.7426L474.958 208.187C486.8 218.513 479.497 238 463.785 238H52.2145C36.503 238 29.2001 218.513 41.0418 208.187L246.827 28.7426Z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M438 259H81V464C81 476.15 90.8497 486 103 486H201.625V368.296H316.157V486H416C428.15 486 438 476.15 438 464V259Z"
        fill={props.color}
      />
    </Svg>
  );
}

export default HomeIcon;
