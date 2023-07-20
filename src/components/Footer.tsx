import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { createContext, useState } from "react";
import { ZeeboPopup, ZukoPopup } from "./Cats";

interface IFooterContext {
  setZuko: null | ((val: number) => void);
  setZeebo: null | ((val: number) => void);
  zeebo: number;
  zuko: number;
}

interface IFooterContextProps {
  children: React.ReactNode;
}

const defaultFooterContext: IFooterContext = {
  setZeebo: () => {
    console.log("Meowww!");
  },
  setZuko: () => {
    console.log("MEEEOOOWW!!");
  },
  zeebo: -100,
  zuko: -100,
};

export const FooterContext = createContext(defaultFooterContext);

const FooterContextProvider = (props: IFooterContextProps) => {
  const [zeebo, setZeebo] = useState<number>(-145);
  const [zuko, setZuko] = useState<number>(-80);

  const handleSetZeebo = (val: number): void => {
    console.log("Meowww!");
    setZeebo(val);
  };

  const handleSetZuko = (val: number): void => {
    console.log("MEEEOOOWW!!");
    setZuko(val);
  };

  return (
    <FooterContext.Provider
      value={{
        zeebo,
        zuko,
        setZeebo: handleSetZeebo,
        setZuko: handleSetZuko,
      }}
    >
      {props.children}
    </FooterContext.Provider>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.background.default,
        borderColor: "transparent",
        bottom: 0,
        left: 0,
        marginTop: "auto",
        p: 2,
        width: "100%",
      }}
      component="footer"
      variant="outlined"
    >
      <FooterContextProvider>
        <ZukoPopup />
        <ZeeboPopup />
        <Stack
          sx={{ m: "auto" }}
          maxWidth="md"
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Typography sx={{ my: "auto" }} textAlign={{ xs: "right" }}>
            Built with ☕ &amp; 😻
          </Typography>
          <Typography sx={{ my: "auto" }} textAlign={{ xs: "right" }}>
            Supported by
            <Box component="strong" sx={{ px: 1 }}>
              Zeebo
            </Box>
            and
            <Box component="strong" sx={{ pl: 1 }}>
              Zuko
            </Box>
          </Typography>
          <Typography sx={{ my: "auto" }} textAlign={{ xs: "right" }}>
            &copy; 2016 - {new Date().getFullYear()}
          </Typography>
          <Box sx={{ ml: { xs: "auto", md: "unset" } }}>
            <iframe
              src="https://github.com/sponsors/jwu910/button"
              title="Sponsor Josh"
              height="32"
              width="114"
              style={{ border: 0, borderRadius: "6px" }}
            ></iframe>
          </Box>
        </Stack>
      </FooterContextProvider>
    </Paper>
  );
};

export default Footer;
