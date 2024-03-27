import "@fontsource/ibm-plex-mono";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
    greenHighlight: "#27ae60",
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
