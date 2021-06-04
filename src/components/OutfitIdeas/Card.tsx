import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { GestureEvent, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Box } from "src/theme/Theme";
import { mix, mixColor, snapPoint } from "react-native-redash";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
const snapPoints = [-wWidth, 0, wWidth];

interface CardProps {
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
  index: number;
  aIndex: Animated.SharedValue<number>;
}

const Card: React.FC<CardProps> = ({
  aIndex,
  index,
  step,
  source,
  onSwipe,
}) => {
  const position = useDerivedValue(() => index * step - aIndex.value);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    GestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + (translationX as number);
      translateY.value = ctx.y + (translationY as number);
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, { velocity: velocityY as number });
      const dest = snapPoint(translateX.value, velocityX as number, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest !== 0,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && runOnJS(onSwipe)()
      );
    },
  });

  const cardContainerStyle = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.9);

    return {
      backgroundColor: mixColor(position.value, "#C9E9E7", "#74BCB8"),

      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.2, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            { width, height, borderRadius, overflow: "hidden" },
            cardContainerStyle,
          ]}
        >
          <Animated.Image
            {...{ source }}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
