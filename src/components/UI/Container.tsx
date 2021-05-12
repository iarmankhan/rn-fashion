import React from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import theme from "src/theme";
import { Box } from "src/theme/Theme";

export const containerAssets = [require("../../../assets/pattern1.png")];

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, footer }) => {
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image source={containerAssets[0]} style={styles.image} />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={containerAssets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box height={200} backgroundColor="secondary">
        {footer}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: { width, height, borderBottomLeftRadius: theme.borderRadii.xl },
});

export default Container;
