import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerContent, {
  DRAWER_WIDTH,
} from "src/components/Drawer/DrawerContent";
import OutfitIdeas from "src/screens/Home/OutfitIdeas";
import { HomeRoutes } from "src/types/navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="OutfitIdeas"
      drawerContent={() => <DrawerContent />}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
