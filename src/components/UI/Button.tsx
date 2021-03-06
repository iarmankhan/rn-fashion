import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Theme } from "src/theme";
import { Text } from "src/theme/Theme";

interface ButtonProps {
  label: string;
  variant?: "primary" | "default";
  onPress: () => void;

  style?: RectButtonProps["style"];
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  onPress,
  label,
  style,
}) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.background2;
  const color =
    variant === "primary" ? theme.colors.background : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
