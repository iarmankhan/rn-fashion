import React from "react";
import { Dimensions, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "../../theme";

const { width } = Dimensions.get("window");

const viewBox = {
  width: 375,
  height: 100,
};

const height = (100 * width) / viewBox.width;

const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 0 50 0 0 0 0 100";

interface ContentFooterProps {}

const ContentFooter: React.FC<ContentFooterProps> = () => {
  const theme = useTheme();
  return (
    <Svg
      width={width}
      height={height}
      viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
    >
      <Path d={d} fill={theme.colors.background} />
    </Svg>
  );
};
export default ContentFooter;
