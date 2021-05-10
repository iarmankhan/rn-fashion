import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width } = Dimensions.get("window");
const Slide: React.FC<SlideProps> = ({ label, right }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
});

export default Slide;
