import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../../components/UI/Header";
import { Box } from "../../theme/Theme";
import { HomeNavigationProps } from "../../types/navigation";
import SettingsRow from "../../components/Settings/SettingsRow";
import ContentFooter from "../../components/UI/ContentFooter";

const Settings: React.FC<HomeNavigationProps<"Settings">> = ({
  navigation,
}) => {
  return (
    <>
      <View
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "red" }}
      />

      <Box backgroundColor="background">
        <Header
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
          title="Notifications"
        />
        <Box padding="m">
          <SettingsRow
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <SettingsRow
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <SettingsRow
            title="Stock notifications"
            description="If the product you ❤️ comes back in stock "
          />
          <SettingsRow
            title="New stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>

      <ContentFooter />
    </>
  );
};

export default Settings;
