import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "src/theme";
import { Text } from "src/theme/Theme";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "default" | "transparent";
  onPress: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  onPress,
  label,
  children,
}) => {
  const theme = useTheme<Theme>();

  // TODO: improve this
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
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
