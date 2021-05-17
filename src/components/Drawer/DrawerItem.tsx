import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcon from "src/components/UI/RoundedIcon";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { DrawerItemType } from "src/types/drawer";

const DrawerItem: React.FC<
  DrawerItemType & DrawerContentComponentProps<DrawerContentOptions>
> = ({ navigation, icon, color, label, screen }) => {
  const theme = useTheme();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() => navigation.navigate(screen)}
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          size={36}
          iconRatio={0.5}
          color="white"
          backgroundColor={color}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
