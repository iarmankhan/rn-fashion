import {
  createTheme,
  ThemeProvider as RestyleThemeProvider,
  useTheme as useReTheme,
} from "@shopify/restyle";
import React from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const palette = {
  white: "white",
  orange: "#FE5E33",
  yellow: "#FFc641",
  pink: "#FF87A2",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
  green: "#2CB9B0",
};

const theme = createTheme({
  colors: {
    primary: palette.green,
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12, 13, 52, 0.7)",
    background: palette.white,
    background2: "#F4F0EF",
    info: "#808080",
    primaryLight: "#E7F9F7",

    graph1: palette.orange,
    graph2: palette.yellow,

    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
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
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "bold",
      color: "background",
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
    title3: {
      fontFamily: "semiBold",
      fontSize: 16,
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
    header: {
      fontSize: 12,
      fontFamily: "semiBold",
      lineHeight: 24,
      color: "secondary",
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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>;
};
