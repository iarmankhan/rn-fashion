import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { Dimensions, View } from "react-native";
import Animated, { divide, multiply, sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash/lib/module/v1";
import Underlay, {
  MARGIN,
} from "src/components/TransactionHistory/Graph/Underlay";
import { Theme, useTheme } from "src/theme";
import { Box } from "src/theme/Theme";
import { lerp } from "src/utils/linearInterpolation";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const AnimatedBox = Animated.createAnimatedComponent(Box);

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

const Graph: React.FC<GraphProps> = ({ data, startDate, numberOfMonths }) => {
  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, { duration: 650 });
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;

  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const values = data.map((d) => d.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;

  return (
    <Box
      paddingBottom={MARGIN}
      paddingLeft={MARGIN}
      marginTop="xl"
      marginBottom="l"
    >
      <Underlay
        maxY={maxY}
        minY={minY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <View style={{ width, height, overflow: "hidden" }}>
        {data.map((point) => {
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );
          const totalHeight = lerp(0, height, point.value / maxY);
          const currentHeight = multiply(transition, totalHeight);
          const translateY = divide(sub(totalHeight, currentHeight), 2);
          return (
            <AnimatedBox
              position="absolute"
              key={point.id}
              left={i * step}
              bottom={0}
              height={totalHeight}
              width={step}
              zIndex={1}
              style={{ transform: [{ translateY }, { scaleY: transition }] }}
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
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
