import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { add } from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
  withSpring,
} from "react-native-redash/lib/module/v1";
import { Box } from "src/theme/Theme";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
  position: Animated.Adaptable<number>;
}

const Card: React.FC<CardProps> = ({ position }) => {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();

  // TODO: fix types
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8") as never;
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    snapPoints: [-width, 0, width],
    state,
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      snapPoints: [0],
      state,
    })
  );
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
