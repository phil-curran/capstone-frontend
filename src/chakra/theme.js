import "@fontsource/ibm-plex-mono";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black10: "#000000",
    black9: "#1a1a1a",
    black8: "#333333",
    black7: "#4d4d4d",
    black6: "#666666",
    black5: "#808080",
    black4: "#999999",
    black3: "#b2b2b2",
    black2: "#cccccc",
    black1: "#e5e5e5",
    black0: "#ffffff",
    white0: "#ffffff",
    white1: "#e5e5e5",
    white2: "#cccccc",
    white3: "#b2b2b2",
    white4: "#999999",
    white5: "#808080",
    white6: "#666666",
    white7: "#4d4d4d",
    white8: "#333333",
    white9: "#1a1a1a",
    white10: "#000000",
    lightGreen: "#1abc9c",
    darkGreen: "#16a085",
    lightLime: "#4cd137",
    darkLime: "#27ae60",
    lightBlue: "#0097e6",
    darkBlue: "#2980b9",
    lightRed: "#e84118",
    darkRed: "#c0392b",
    brightYellow: "#fbc531",
    darkYellow: "#f39c12",
    brightOrange: "#e67e22",
    darkOrange: "#d35400",
    lightPurple: "#9b59b6",
    darkPurple: "#8e44ad",
    lightNavy: "#353b48",
    darkNavy: "#2f3640",
  },
  font: {
    body: "IBM Plex Mono, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "black9",
        color: "white1",
      },
    },
  },
});

export default theme;
