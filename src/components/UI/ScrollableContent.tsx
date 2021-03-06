import React from "react";
import { Dimensions } from "react-native";
import Svg, { ClipPath, Defs, Image, Path } from "react-native-svg";

import { useTheme } from "../../theme";
import { Box } from "../../theme/Theme";

const { width } = Dimensions.get("window");

const viewBox = {
  width: 375,
  height: 100,
};

const height = (100 * width) / viewBox.width;

const d = "M 0 100 A 50 50 0 0 1 50 50 H 325 A 50 50 0 0 0 375 0 V 100 Z";

interface ScrollableContentProps {
  children: React.ReactNode;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box flex={1}>
      {children}
      <Svg
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
      >
        <Defs>
          <ClipPath id="clip">
            <Path d={d} fill={theme.colors.background} />
          </ClipPath>
        </Defs>

        <Image
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYmid slice"
          clipPath="url(#clip)"
          href={require("../../../assets/pattern3.png")}
        />
      </Svg>
    </Box>
  );
};

export default ScrollableContent;
