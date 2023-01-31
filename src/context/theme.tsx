import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
          contrastThreshold: 3,
        },
      }),
    [colorMode]
  );

  return (
    <ThemeContext.Provider value={colorModeModule}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
