import moment from "moment";
import React, { useLayoutEffect, useRef } from "react";
import { Dimensions } from "react-native";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";
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
  startDate: number;
  numberOfMonths: number;
}

const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={1000}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

const Graph: React.FC<GraphProps> = ({ data, startDate, numberOfMonths }) => {
  const theme = useTheme();
  const ref = useRef<TransitioningView>(null);
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;

  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const values = data.map((d) => d.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;

  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);

  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay
        maxY={maxY}
        minY={minY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Transitioning.View
        transition={transition}
        ref={ref}
        style={{ width, height, overflow: "hidden" }}
      >
        {data.map((point) => {
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );
          return (
            <Box
              position="absolute"
              key={point.id}
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
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
