import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "src/screens/Authentication/ForgotPassword";
import Login from "src/screens/Authentication/Login";
import OnBoarding from "src/screens/Authentication/OnBoarding";
import PasswordChanged from "src/screens/Authentication/PasswordChanged";
import SignUp from "src/screens/Authentication/SignUp";
import Welcome from "src/screens/Authentication/Welcome";
import { AuthenticationRoutes } from "src/types/navigation";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

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
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
