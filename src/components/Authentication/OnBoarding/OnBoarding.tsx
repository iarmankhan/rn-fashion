import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import Slide, { SLIDE_HEIGHT } from "./Slide";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OnBoardingProps {}

const { width } = Dimensions.get("window");

const OnBoarding: React.FC<OnBoardingProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        />
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
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default OnBoarding;
