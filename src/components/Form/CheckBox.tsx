import { Feather as Icon } from "@expo/vector-icons";
import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "src/theme/Theme";

interface CheckBoxProps {
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => setChecked(!checked)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          height={20}
          width={20}
          backgroundColor={checked ? "primary" : "white"}
          marginRight="s"
          borderWidth={1}
          borderColor="primary"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
