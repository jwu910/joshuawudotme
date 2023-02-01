import { useMediaQuery } from "@mui/material";
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material/styles";
import * as React from "react";
import useLocalStorage from "../hooks/use-local-storage";

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
});

const COLORS = {
  BLUEISH_GREEN_DARK: "#214045",
  ORANGE_LIGHTISH: "#FFF5EB",
  PINK_PURPLE_BRIGHT: "#C1AEBE",
  PINK_PURPLE: "#90708C",
  TEAL_DARK: "",
  TEAL: "",
  ZUKOS_BELLY: "#FFB260",
};

export default function JWThemeProvider(props: React.PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorMode, setColorMode] = useLocalStorage(
    "colorMode",
    prefersDarkMode ? "dark" : "light"
  );

  const colorModeModule = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      },
    }),
    [colorMode, setColorMode]
  );

  const theme = React.useMemo(() => {
    const getColorModeObj = (
      light: PaletteColorOptions,
      dark: PaletteColorOptions
    ): PaletteColorOptions => {
      if (colorMode === "light") {
        return light;
      } else {
        return dark;
      }
    };

    const createdTheme = createTheme({
      palette: {
        background: {
          ...(colorMode === "light"
            ? { default: COLORS.ORANGE_LIGHTISH }
            : { default: COLORS.BLUEISH_GREEN_DARK }),
        },
        primary: getColorModeObj(
          { main: COLORS.ZUKOS_BELLY },
          { main: COLORS.PINK_PURPLE_BRIGHT }
        ),
        secondary: getColorModeObj(
          { main: COLORS.PINK_PURPLE },
          { main: COLORS.ZUKOS_BELLY }
        ),
        info: { main: "#58A4B0" }, // unused
        text: {
          ...(colorMode === "light"
            ? {
                primary: "#0F192E", // almost black
                secondary: "#2D4B8B", // darker blue -- change this to something less blue
                disabled: "#567AC8",
              }
            : {
                primary: "#ACD2D8", // light teal
                secondary: "#58A4B0", // darker teal
                disabled: "#41818B",
              }),
        },
        mode: colorMode,
        contrastThreshold: 3,
      },
    });

    // Override h1 heading with breakpoint sizing
    createdTheme.typography.h1 = {
      fontSize: "1.3rem",
      [createdTheme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
      [createdTheme.breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
    };

    return createdTheme;
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={colorModeModule}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
