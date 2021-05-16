import { createTheme, useTheme as useReTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "#F4F0EF",
    primaryLight: "#E7F9F7",
    orange: "#FE5E33",
    yellow: "#FFc641",
    pink: "#FF87A2",
    violet: "#442CB9",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontFamily: "semiBold",
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontFamily: "semiBold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    body: {
      fontFamily: "regular",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontFamily: "medium",
      fontSize: 15,
      color: "text",
    },
  },
});

export type Theme = typeof theme;

// useTheme typed hook
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };

export default theme;
