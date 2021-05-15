import React from "react";
import { View, StyleSheet, Text } from "react-native";

const OutfitIdeas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OutfitIdeas;
