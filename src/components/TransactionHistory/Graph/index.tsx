import React from "react";
import { Dimensions } from "react-native";
import Underlay, {
  MARGIN,
} from "src/components/TransactionHistory/Graph/Underlay";
import { Theme, useTheme } from "src/theme";
import { Box } from "src/theme/Theme";
import { lerp } from "src/utils/linearInterpolation";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface Point {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: Point[];
  minDate: number;
  maxDate: number;
}

const Graph: React.FC<GraphProps> = ({ data, minDate, maxDate }) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;

  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const values = data.map((d) => d.value);
  const dates = data.map((d) => d.date);
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / data.length;

  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay {...{ minY, maxY, dates, step }} />
      <Box {...{ width, height }}>
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
              zIndex={1}
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
    </Box>
  );
};

export default Graph;
