import Constants from "expo-constants";
import React from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { makeStyles } from "src/theme";
import { Box } from "src/theme/Theme";

export const containerAssets = [
  require("../../../assets/pattern1.png"),
  require("../../../assets/pattern2.png"),
  require("../../../assets/pattern3.png"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  pattern: 0 | 1 | 2;
}

const Container: React.FC<ContainerProps> = ({ children, pattern, footer }) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  const asset = containerAssets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box backgroundColor="background">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image source={asset} style={styles.image} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
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
            backgroundColor="background"
            flex={1}
            padding="xl"
            justifyContent="center"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingVertical="m">
          {footer}
          <Box height={insets.bottom + 20} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

const useStyles = makeStyles((theme) => ({
  image: { width, height, borderBottomLeftRadius: theme.borderRadii.xl },
}));

export default Container;
