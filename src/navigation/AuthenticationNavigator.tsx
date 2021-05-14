import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "src/screens/Authentication/ForgotPassword";
import Login from "src/screens/Authentication/Login";
import OnBoarding from "src/screens/Authentication/OnBoarding";
import SignUp from "src/screens/Authentication/SignUp";
import Welcome from "src/screens/Authentication/Welcome";
import { Routes } from "src/types/navigation";

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
