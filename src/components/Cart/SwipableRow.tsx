import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GestureEvent, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { aspectRatio, useTheme } from "../../theme";

interface SwipableRowProps {
  children: React.ReactNode;
  onDelete: () => void;
}

const { width } = Dimensions.get("window");
const finalDestination = width;
const snapPoints = [-85 * aspectRatio, 0, finalDestination];

const SwipableRow: React.FC<SwipableRowProps> = ({ onDelete, children }) => {
  const theme = useTheme();
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<GestureEvent, { x: number }>(
    {
      onStart: (_, context) => {
        context.x = translateX.value;
      },
      onActive: ({ translationX }, context) => {
        translateX.value = context.x + (translationX as number);
      },
      onEnd: ({ velocityX }) => {
        const dest = snapPoint(
          translateX.value,
          velocityX as number,
          snapPoints
        );
        translateX.value = withSpring(dest, { overshootClamping: true }, () => {
          runOnJS(onDelete)();
        });
      },
    }
  );

  const style = useAnimatedStyle(() => ({
    backgroundColor: theme.colors.background,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View>
      <View
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "red" }}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipableRow;
