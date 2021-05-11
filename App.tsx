import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "src/theme";

import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import LoadAssets from "./src/components/LoadAssets";

const fonts = {
  bold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  semiBold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  regular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  medium: require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <ThemeProvider {...{ theme }}>
        <AuthenticationNavigator />
      </ThemeProvider>
    </LoadAssets>
  );
}
