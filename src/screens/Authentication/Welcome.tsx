import React from "react";
import { Dimensions, Image } from "react-native";
import Button from "src/components/UI/Button";
import theme from "src/theme";
import { Box, Text } from "src/theme/Theme";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

export const welcomeAssets = [picture.src];

const Welcome: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          position="absolute"
          backgroundColor="grey"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <Box
          backgroundColor="white"
          justifyContent="space-evenly"
          alignItems="center"
          borderTopLeftRadius="xl"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {
              //
            }}
          />
          <Button
            label="Join us, it's Free"
            onPress={() => {
              //
            }}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => {
              //
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
