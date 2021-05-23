import React from "react";
import { Image, StyleSheet } from "react-native";
import { useTheme } from "src/theme";
import { Box } from "src/theme/Theme";

export const outfitIdeasAssets = [require("../../../assets/background.png")];

const Background: React.FC = () => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="background"
          borderBottomRightRadius="xl"
        />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="background" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={outfitIdeasAssets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </Box>
  );
};

export default Background;
