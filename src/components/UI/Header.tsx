import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "src/components/UI/RoundedIconButton";
import { Box, Text } from "src/theme/Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, left, right }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
      style={{ marginTop: insets.top + 5 }}
    >
      <RoundedIconButton
        onPress={left.onPress}
        name={left.icon}
        size={24}
        color="white"
        backgroundColor="secondary"
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        onPress={right.onPress}
        name={right.icon}
        size={24}
        color="white"
        backgroundColor="secondary"
      />
    </Box>
  );
};

export default Header;
