import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ScrollView } from "react-native";
import DrawerItem from "src/components/Drawer/DrawerItem";
import Header from "src/components/UI/Header";
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
    color: "drawer1",
  },
  {
    id: "2",
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "drawer2",
  },
  {
    id: "3",
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer3",
  },
  {
    id: "4",
    icon: "settings",
    label: "Notifications Settings",
    screen: "Settings",
    color: "drawer4",
  },
  {
    id: "5",
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            left={{ icon: "x", onPress: () => navigation.closeDrawer() }}
            right={{
              icon: "shopping-bag",
              onPress: () => navigation.navigate("Cart"),
            }}
            title="Menu"
            dark
          />
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
          backgroundColor="background"
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
        backgroundColor="background"
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
