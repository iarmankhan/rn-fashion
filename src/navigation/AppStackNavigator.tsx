import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthenticationNavigator from "src/navigation/AuthenticationNavigator";
import HomeNavigator from "src/navigation/HomeNavigator";
import { AppStackRoutes } from "src/types/navigation";

const Stack = createStackNavigator<AppStackRoutes>();

const AppStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
