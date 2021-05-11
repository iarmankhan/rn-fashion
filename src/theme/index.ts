import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    text: "#0C0D34",
    body: "rgba(12, 13, 52, 0.7)",
    white: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontFamily: "SFProText-Semibold",
      fontSize: 28,
      color: "text",
    },
    title2: {
      fontFamily: "SFProText-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "text",
    },
    body: {
      fontFamily: "SFProText-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
  },
});

export type Theme = typeof theme;

export default theme;
