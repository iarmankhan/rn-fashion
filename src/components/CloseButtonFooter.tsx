import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "src/theme/Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface CloseButtonFooterProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButtonFooter: React.FC<CloseButtonFooterProps> = ({ onPress }) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        backgroundColor="white"
        width={SIZE}
        height={SIZE}
        style={{ borderRadius: SIZE / 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary" textAlign="center">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};
export default CloseButtonFooter;
