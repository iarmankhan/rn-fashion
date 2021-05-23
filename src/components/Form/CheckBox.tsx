import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "src/theme/Theme";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
  return (
    <BorderlessButton
      onPress={() => onChange(!checked)}
      style={{ justifyContent: "center" }}
      rippleColor="transparent"
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          height={20}
          width={20}
          backgroundColor={checked ? "primary" : "background"}
          marginRight="s"
          borderWidth={1}
          borderColor="primary"
        >
          <Icon name="check" color="background" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default CheckBox;
