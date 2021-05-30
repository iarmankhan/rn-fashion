import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "src/theme/Theme";

import Button from "../../UI/Button";

const { width } = Dimensions.get("window");

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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 44,
    width,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
  },
});

export default SubSlide;
