import { Box, Container, Stack, Typography } from "@mui/material";
import { createContext, useState } from "react";
import { ZeeboPopup } from "../components/ZeeboPopup";

interface IFooterContext {
  setZuko: Function;
  setZeebo: Function;
  zeebo: number;
  zuko: number;
}

interface IFooterContextProps {
  children: React.ReactNode;
}

const defaultFooterContext: IFooterContext = {
  setZeebo: (): void => {},
  setZuko: (): void => {},
  zeebo: -100,
  zuko: -100,
};

export const FooterContext = createContext(defaultFooterContext);

const FooterContextProvider = (props: IFooterContextProps) => {
  const [zeebo, setZeebo] = useState<number>(-100);
  const [zuko, setZuko] = useState<number>(-100);

  const handleSetZeebo = (val: number): void => {
    console.log("Meowww!");
    setZeebo(val);
  };

  const handleSetZuko = (val: number): void => {
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
  return (
    <Container
      component="footer"
      maxWidth="md"
      sx={{
        zIndex: 1001,
        p: 2,
        bottom: 0,
        position: "absolute",
      }}
    >
      <FooterContextProvider>
        <ZeeboPopup />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Typography textAlign={{ xs: "right" }}>
            Built with ☕ &amp; 😻
          </Typography>
          <Typography textAlign={{ xs: "right" }}>
            Supported by
            <Box component="strong" sx={{ px: 1 }}>
              Zeebo
            </Box>
            and
            <Box component="strong" sx={{ pl: 1 }}>
              Zuko
            </Box>
          </Typography>
          <Typography textAlign={{ xs: "right" }}>
            &copy; 2016 - {new Date().getFullYear()}
          </Typography>
        </Stack>
      </FooterContextProvider>
    </Container>
  );
};

export default Footer;
