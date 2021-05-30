import React, { ReactNode } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Dimensions, View } from "react-native";
import { GestureEvent, PanGestureHandler } from "react-native-gesture-handler";
import { clamp, snapPoint } from "react-native-redash";

import { Box } from "../../theme/Theme";
import { useTheme } from "../../theme";

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 682 * aspectRatio;

const minHeight = 228 * aspectRatio;
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
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "flex-end",
              height: theme.borderRadii.xl,
            }}
          >
            <View
              style={{
                height: 5 * aspectRatio,
                width: 60 * aspectRatio,
                backgroundColor: theme.colors.background2,
                marginBottom: theme.spacing.m,
                borderRadius: 2.5 * aspectRatio,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default CartContainer;
