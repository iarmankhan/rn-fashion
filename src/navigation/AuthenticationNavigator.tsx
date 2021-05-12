import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "src/screens/Authentication/Login";
import OnBoarding from "src/screens/Authentication/OnBoarding";
import Welcome from "src/screens/Authentication/Welcome";
import { Routes } from "src/types/navigation";

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
