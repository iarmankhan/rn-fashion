import React from "react";

import Header from "../../components/UI/Header";
import { Box } from "../../theme/Theme";
import { HomeNavigationProps } from "../../types/navigation";
import SettingsRow from "../../components/Settings/SettingsRow";

const Settings: React.FC<HomeNavigationProps<"Settings">> = ({
  navigation,
}) => {
  return (
    <Box flex={1}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
        title="Notifications"
      />
      <Box padding="m" flex={1}>
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
  );
};

export default Settings;
