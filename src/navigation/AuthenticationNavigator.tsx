import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "src/screens/Authentication/OnBoarding";
import Welcome from "src/screens/Authentication/Welcome";

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
