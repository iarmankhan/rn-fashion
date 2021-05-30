import React, { ReactNode } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { GestureEvent, PanGestureHandler } from "react-native-gesture-handler";
import { clamp, snapPoint } from "react-native-redash";

import { Box } from "../../theme/Theme";
import { useTheme } from "../../theme";

const { width } = Dimensions.get("window");
const height = (682 * width) / 375;
const minHeight = (228 * width) / 375;
const snapPoints = [-(height - minHeight), 0];

interface CartContainerProps {
  children: ReactNode;
}

const CartContainer: React.FC<CartContainerProps> = ({ children }) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<GestureEvent, { y: number }>(
    {
      onStart: (_, context) => {
        context.y = translateY.value;
      },
      onActive: ({ translationY }, context) => {
        translateY.value = clamp(
          context.y + (translationY as number),
          snapPoints[0],
          snapPoints[1]
        );
      },
      onEnd: ({ velocityY }) => {
        const dest = snapPoint(
          translateY.value,
          velocityY as number,
          snapPoints
        );
        translateY.value = withSpring(dest, { overshootClamping: true });
      },
    }
  );
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1} backgroundColor="secondary">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            style,
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
          ]}
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default CartContainer;
