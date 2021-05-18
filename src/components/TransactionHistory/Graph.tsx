import React from "react";
import { Dimensions } from "react-native";
import { Theme, useTheme } from "src/theme";
import { Box } from "src/theme/Theme";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const lerp = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

export interface Point {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: Point[];
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  const theme = useTheme();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio;
  const values = data.map((d) => d.value);
  const dates = data.map((d) => d.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / data.length;

  return (
    <Box {...{ width, height }} marginTop="xl">
      {data.map((point, i) => {
        if (point.value === 0) return null;

        return (
          <Box
            position="absolute"
            key={point.date}
            left={i * step}
            bottom={0}
            height={lerp(0, height, point.value / maxY)}
            width={step}
          >
            <Box
              position="absolute"
              top={0}
              bottom={0}
              right={theme.spacing.m}
              left={theme.spacing.m}
              backgroundColor={point.color}
              opacity={0.1}
              borderTopLeftRadius="m"
              borderTopRightRadius="m"
            />
            <Box
              position="absolute"
              top={0}
              height={32}
              right={theme.spacing.m}
              left={theme.spacing.m}
              backgroundColor={point.color}
              borderRadius="l"
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Graph;
