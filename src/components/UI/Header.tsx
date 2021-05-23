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
  dark?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  left,
  right,
  dark = false,
}) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
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
        size={44}
        iconRatio={0.5}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        onPress={right.onPress}
        name={right.icon}
        size={44}
        iconRatio={0.5}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

export default Header;
