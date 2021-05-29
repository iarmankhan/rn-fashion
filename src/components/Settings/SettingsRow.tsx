import React, { useState } from "react";
import { Switch } from "react-native-gesture-handler";

import { Box, Text } from "../../theme/Theme";
import { useTheme } from "../../theme";

interface SettingsRowProps {
  title: string;
  description: string;
}

const SettingsRow: React.FC<SettingsRowProps> = ({ title, description }) => {
  const theme = useTheme();
  const [toggled, setToggled] = useState(false);

  return (
    <Box flexDirection="row" marginBottom="m">
      <Box flex={1} justifyContent="center">
        <Text variant="title3">{title}</Text>
        <Text variant="body">{description}</Text>
      </Box>
      <Box paddingVertical="m">
        <Switch
          value={toggled}
          onValueChange={setToggled}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.background2,
          }}
        />
      </Box>
    </Box>
  );
};

export default SettingsRow;
