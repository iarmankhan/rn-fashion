import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { onBoardingAssets } from "src/screens/Authentication/OnBoarding";
import { welcomeAssets } from "src/screens/Authentication/Welcome";
import theme from "src/theme";

import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import LoadAssets from "./src/components/LoadAssets";

const assets = [...onBoardingAssets, ...welcomeAssets];

const fonts = {
  bold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  semiBold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  regular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  medium: require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <ThemeProvider {...{ theme }}>
        <AuthenticationNavigator />
      </ThemeProvider>
    </LoadAssets>
  );
}
