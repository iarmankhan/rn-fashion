import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Theme } from "src/theme";
import { Text } from "src/theme/Theme";

interface LinkButtonProps {
  onPress: () => void;
  label: string;
  color?: keyof Theme["colors"];
}

const LinkButton: React.FC<LinkButtonProps> = ({
  onPress,
  label,
  color = "secondary",
}) => {
  return (
    <BorderlessButton rippleColor="transparent" {...{ onPress }}>
      <Text variant="button" {...{ color }}>
        {label}
      </Text>
    </BorderlessButton>
  );
};

export default LinkButton;
