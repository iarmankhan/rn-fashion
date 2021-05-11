import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "src/theme";

import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import LoadAssets from "./src/components/LoadAssets";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
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
