import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";
import Dot from "src/components/Authentication/OnBoarding/Dot";
import SubSlide from "src/components/Authentication/OnBoarding/Subslide";
import { slides } from "src/data/onBoardingSlides";
import Slide, {
  SLIDE_HEIGHT,
  BORDER_RADIUS,
} from "src/components/Authentication/OnBoarding/Slide";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OnBoardingProps {}

const { width } = Dimensions.get("window");

const OnBoarding: React.FC<OnBoardingProps> = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  }) as never;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide
              key={index.toString()}
              right={index % 2 !== 0}
              {...{ picture, title }}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <SubSlide
                onPress={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  scroll.current?.scrollTo({
                    x: (index + 1) * width,
                    animated: true,
                  });
                }}
                key={index.toString()}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
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
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoarding;
