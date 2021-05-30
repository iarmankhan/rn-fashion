import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/en";
import * as React from "react";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { drawerAssets } from "src/components/Drawer/DrawerContent";
import AppStackNavigator from "src/navigation/AppStackNavigator";
import { onBoardingAssets } from "src/screens/Authentication/OnBoarding";
import { welcomeAssets } from "src/screens/Authentication/Welcome";
import { ThemeProvider } from "src/theme";

import LoadAssets from "./src/components/LoadAssets";

if (Platform.OS === "android") {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === "function") {
    (Intl as any).__disableRegExpRestore();
  }
}

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
      <ThemeProvider>
        <SafeAreaProvider>
          <AppStackNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </LoadAssets>
  );
}
