import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import OutfitIdeas from "src/screens/Home/OutfitIdeas";
import { AuthenticatedRoutes } from "src/types/navigation";

const Drawer = createDrawerNavigator<AuthenticatedRoutes>();

const HomeNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="OutfitIdeas">
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
