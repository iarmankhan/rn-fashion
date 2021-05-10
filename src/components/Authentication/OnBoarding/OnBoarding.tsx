import React from "react";
import { View, StyleSheet, Text } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = () => {
  return (
    <View style={styles.container}>
      <Text>OnBoarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnBoarding;
