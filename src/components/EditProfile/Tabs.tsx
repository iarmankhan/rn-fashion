import React, { Children, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { mix, useTiming } from "react-native-redash";

const { width } = Dimensions.get("window");

interface Tab {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const transition = useTiming(index);

  const dotStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: -5,
    bottom: 0,
    backgroundColor: theme.colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
    transform: [
      {
        translateX: mix(transition.value, width * 0.25, width * 0.75),
      },
    ],
  }));

  const tabStyle = useAnimatedStyle(() => ({
    flex: 1,
    width: width * tabs.length,
    flexDirection: "row",
    transform: [{ translateX: -width * transition.value }],
  }));

  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton key={i} style={{ flex: 1 }} onPress={() => setIndex(i)}>
            <Box padding="m" style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant="title3" textAlign="center">
                {tab.title}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View style={dotStyle} />
      </Box>
      <Animated.View style={tabStyle}>
        {Children.map(children, (child, i) => (
          <Box key={i} flex={1} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
