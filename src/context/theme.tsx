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
            ? { default: "#FFF5EB" }
            : { default: "#214045" }),
        },
        primary: getColorModeObj({ main: "#FFB260" }, { main: "#90708C" }),
        secondary: getColorModeObj({ main: "#90708C" }, { main: "#FFB260" }),
        info: { main: "#58A4B0" },
        text: {
          ...(colorMode === "light"
            ? {
                primary: "#0F192E",
                secondary: "#2D4B8B",
                disabled: "#567AC8",
              }
            : {
                primary: "#ACD2D8",
                secondary: "#58A4B0",
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
