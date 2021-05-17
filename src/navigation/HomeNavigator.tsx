import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerContent, {
  DRAWER_WIDTH,
} from "src/components/Drawer/DrawerContent";
import FavoriteOutfits from "src/screens/Home/FavoriteOutfits";
import OutfitIdeas from "src/screens/Home/OutfitIdeas";
import { HomeRoutes } from "src/types/navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="OutfitIdeas"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
      <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
