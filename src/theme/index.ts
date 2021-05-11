import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
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
      color: "title",
    },
    title2: {
      fontFamily: "semiBold",
      fontSize: 24,
      lineHeight: 30,
      color: "title",
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

export default theme;
