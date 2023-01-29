import { Box, Stack } from "@mui/material";
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
    <FooterContextProvider>
      <Box
        sx={{
          backgroundColor: "transparent",
          bottom: 0,
          display: "flex",
          left: 0,
          p: 2,
          position: "relative",
          width: "100vw",
          zIndex: 1001,
        }}
      >
        <ZeeboPopup />
        <Stack
          sx={{ width: "100%", display: "flex" }}
          spacing={2}
          direction="row"
        >
          <Box sx={{ m: "auto", display: "flex" }}>
            Built with 😻 | Supported by
            <Box component="strong" sx={{ px: 1 }}>
              Zeebo
            </Box>
            and{" "}
            <Box component="strong" sx={{ px: 1 }}>
              Zuko
            </Box>{" "}
            | &copy; 2016 - {new Date().getFullYear()}
          </Box>
        </Stack>
      </Box>
    </FooterContextProvider>
  );
};

export default Footer;
