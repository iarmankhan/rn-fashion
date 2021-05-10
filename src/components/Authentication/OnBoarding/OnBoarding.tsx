import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  interpolateColor,
  onScrollEvent,
  useValue,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OnBoardingProps {}

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry find the best oufit here",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas",
  },
  {
    title: "Eccentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individuals & unique style and look amazing everyday",
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the best trends in fashion and explore your personality",
  },
];

const OnBoarding: React.FC<OnBoardingProps> = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  }) as never;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map((slide, index) => (
            <Slide
              label={slide.title}
              key={index.toString()}
              right={index % 2 !== 0}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export default OnBoarding;
