import { ThemeProvider } from "@shopify/restyle";
import * as React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { drawerAssets } from "src/components/Drawer/DrawerContent";
import AppStackNavigator from "src/navigation/AppStackNavigator";
import { onBoardingAssets } from "src/screens/Authentication/OnBoarding";
import { welcomeAssets } from "src/screens/Authentication/Welcome";
import theme from "src/theme";

import LoadAssets from "./src/components/LoadAssets";

const assets = [...onBoardingAssets, ...welcomeAssets, ...drawerAssets];

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
        <SafeAreaProvider>
          <AppStackNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </LoadAssets>
  );
}
