import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  interpolateNode,
  Extrapolate,
} from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";
import { useSpring } from "src/animations";
import { Box } from "src/theme/Theme";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

const Card: React.FC<CardProps> = ({ step, position, source, onSwipe }) => {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();

  // TODO: fix types
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8") as never;
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolateNode(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    snapPoints: [-wWidth, 0, wWidth],
    state,
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
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
            overflow: "hidden",
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
