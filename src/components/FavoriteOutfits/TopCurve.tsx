import React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "src/theme";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve: React.FC<TopCurveProps> = ({ footerHeight }) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secondary} />
    </Svg>
  );
};

export default TopCurve;
