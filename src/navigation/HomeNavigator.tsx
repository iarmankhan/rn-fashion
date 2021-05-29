import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerContent, {
  DRAWER_WIDTH,
} from "src/components/Drawer/DrawerContent";
import EditProfile from "src/screens/Home/EditProfile";
import FavoriteOutfits from "src/screens/Home/FavoriteOutfits";
import OutfitIdeas from "src/screens/Home/OutfitIdeas";
import TransactionHistory from "src/screens/Home/TransactionHistory";
import { HomeRoutes } from "src/types/navigation";

import Settings from "../screens/Home/Settings";

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
      <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
