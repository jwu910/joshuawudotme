import { PaletteMode, useMediaQuery } from "@mui/material";
import {
  PaletteColorOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import * as React from "react";
import useLocalStorage from "../hooks/use-local-storage";
import "./_theme.scss";

interface IThemeContext {
  toggleColorMode: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext,
);

const COLORS = {
  BLUEISH_GREEN_DARK: "#214045",
  BLUEISH_GREEN_LIGHT: "#A5A5A5",
  ORANGE_LIGHT_WHITE: "#FFF5EB",
  ORANGE_LIGHT: "#FFD5AB",
  PINK_PURPLE_BRIGHT: "#C1AEBE",
  PINK_PURPLE: "#90708C",
  TEAL_DARK: "",
  TEAL: "",
  ZUKOS_BELLY: "#FFB260",
  ZUKOS_BELLY_LIGHT: "#BFA384",
};

export default function JWThemeProvider(props: React.PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorMode, setColorMode] = useLocalStorage(
    "colorMode",
    prefersDarkMode ? "dark" : "light",
  ) as [PaletteMode, React.Dispatch<React.SetStateAction<string>>];

  const colorModeModule = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      },
    }),
    [colorMode, setColorMode],
  );

  const theme = React.useMemo(() => {
    const getColorModeObj = (
      light: PaletteColorOptions,
      dark: PaletteColorOptions,
    ): PaletteColorOptions => {
      if (colorMode === "light") {
        return light;
      } else {
        return dark;
      }
    };
    let createdTheme = createTheme({
      palette: {
        background: {
          ...(colorMode === "light"
            ? { default: COLORS.ORANGE_LIGHT_WHITE }
            : { default: COLORS.BLUEISH_GREEN_DARK }),
        },
        primary: getColorModeObj(
          { main: COLORS.ORANGE_LIGHT },
          { main: COLORS.PINK_PURPLE_BRIGHT },
        ),
        secondary: getColorModeObj(
          { main: COLORS.BLUEISH_GREEN_DARK },
          { main: COLORS.ZUKOS_BELLY },
        ),
        info: {
          ...(colorMode === "light"
            ? { main: "#58A4B0" }
            : { main: "#58A4B0" }),
        },
        text: {
          ...(colorMode === "light"
            ? {
                primary: "#0F192E",
                secondary: COLORS.BLUEISH_GREEN_DARK,
                disabled: COLORS.BLUEISH_GREEN_LIGHT,
              }
            : {
                primary: "#ACD2D8",
                secondary: COLORS.ZUKOS_BELLY,
                disabled: COLORS.ZUKOS_BELLY_LIGHT,
              }),
        },
        mode: colorMode,
        contrastThreshold: 3,
      },
      typography: {
        h1: {
          fontSize: "3rem",
        },
      },
    });

    createdTheme = createTheme(createdTheme, {
      components: {
        MuiToolbar: {
          styleOverrides: {
            root: {
              [createdTheme.breakpoints.up("sm")]: {
                minHeight: "48px",
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              transition: "all .2s ease-in-out",
              "&:hover": {
                boxShadow:
                  colorMode === "light"
                    ? `0 0 5px ${COLORS.ZUKOS_BELLY}`
                    : `0 0 5px ${COLORS.PINK_PURPLE_BRIGHT}`,
              },
            },
          },
        },
        MuiStack: {
          defaultProps: {
            useFlexGap: true,
          },
        },
      },
    });

    return responsiveFontSizes(createdTheme);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={colorModeModule}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
