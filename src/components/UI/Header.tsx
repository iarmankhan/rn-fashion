import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "src/components/UI/RoundedIconButton";
import { Box, Text } from "src/theme/Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right?: {
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
        align={"center"}
        {...{ color }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          onPress={right.onPress}
          name={right.icon}
          size={44}
          iconRatio={0.5}
          align={"center"}
          {...{ color }}
        />
      ) : (
        <Box width={44} />
      )}
    </Box>
  );
};

export default Header;
