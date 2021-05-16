import React from "react";
import { Dimensions, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DrawerItem from "src/components/Drawer/DrawerItem";
import RoundedIconButton from "src/components/UI/RoundedIconButton";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { DrawerItemType } from "src/types/drawer";

export const drawerAssets = [require("../../../assets/drawer.png")] as const;

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemType[] = [
  {
    id: "0",
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    id: "1",
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "orange",
  },
  {
    id: "2",
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    id: "3",
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    id: "4",
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "violet",
  },
  {
    id: "5",
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const DrawerContent = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal="m"
            style={{ paddingTop: insets.top + 5 }}
          >
            <RoundedIconButton
              onPress={() => true}
              name="x"
              size={24}
              color="white"
              backgroundColor="secondary"
            />
            <Text color="white">MY PROFILE</Text>
            <RoundedIconButton
              onPress={() => true}
              name="shopping-bag"
              size={24}
              color="white"
              backgroundColor="secondary"
            />
          </Box>
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="l"
        >
          <Box
            position="absolute"
            top={-50}
            bottom={0}
            left={DRAWER_WIDTH / 2 - 50}
            right={0}
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginTop="l" marginBottom="m">
            <Text variant="title1" textAlign="center">
              Arman Khan
            </Text>
            <Text variant="body" textAlign="center">
              arman@gmail.com
            </Text>
          </Box>
          <ScrollView>
            {items.map((item) => (
              <DrawerItem key={item.id} {...item} />
            ))}
          </ScrollView>
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={drawerAssets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};
export default DrawerContent;
