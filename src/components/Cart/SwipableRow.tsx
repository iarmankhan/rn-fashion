import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GestureEvent, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

import { aspectRatio, useTheme } from "../../theme";
import { Box, Text } from "../../theme/Theme";
import RoundedIconButton from "../UI/RoundedIconButton";

interface SwipableRowProps {
  children: React.ReactNode;
  onDelete: () => void;
  height: number;
}

const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;
const snapPoints = [-editWidth, 0, finalDestination];

const SwipableRow: React.FC<SwipableRowProps> = ({
  height: defaultHeight,
  onDelete,
  children,
}) => {
  const theme = useTheme();
  const height = useSharedValue(defaultHeight);
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
          if (dest === finalDestination) {
            height.value = withTiming(0, { duration: 250 }, () => {
              runOnJS(onDelete)();
            });
          }
        });
      },
    }
  );

  const style = useAnimatedStyle(() => ({
    height: height.value,
    backgroundColor: theme.colors.background,
    transform: [{ translateX: translateX.value }],
  }));

  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));

  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          width={editWidth}
          justifyContent="space-evenly"
          padding="m"
          alignItems="center"
          flex={1}
        >
          <Text variant="header" color="background">
            Delete
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.edit, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.8, 0.5]}
        />
        <Box
          width={editWidth}
          justifyContent="space-evenly"
          padding="m"
          alignItems="center"
          alignSelf="flex-end"
          flex={1}
        >
          <RoundedIconButton
            onPress={() => true}
            name="plus"
            size={24}
            color="background"
            backgroundColor="primary"
          />
          <RoundedIconButton
            onPress={() => true}
            name="minus"
            size={24}
            color="background"
            backgroundColor="danger"
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipableRow;
