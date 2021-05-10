import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../UI/Button";

interface SubSlideProps {
  last: boolean;
  subtitle: string;
  description: string;
  onPress: () => void;
}

const SubSlide: React.FC<SubSlideProps> = ({
  subtitle,
  onPress,
  description,
  last,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0C0D34",
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default SubSlide;
