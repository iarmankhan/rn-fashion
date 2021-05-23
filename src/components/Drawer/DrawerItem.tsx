import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcon from "src/components/UI/RoundedIcon";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { DrawerItemType } from "src/types/drawer";
import { HomeRoutes } from "src/types/navigation";

const DrawerItem: React.FC<DrawerItemType> = ({
  icon,
  color,
  label,
  ...props
}) => {
  const navigation =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
  const theme = useTheme();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props?.onPress?.(navigation)
      }
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          size={36}
          iconRatio={0.5}
          color="background"
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
