import { CircularProgress, Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import JWThemeProvider from "../context/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BasePage = () => {
  return (
    <JWThemeProvider>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <React.Suspense fallback={<CircularProgress />}>
          <Outlet />
        </React.Suspense>
        <Footer />
      </Container>
    </JWThemeProvider>
  );
};

export default BasePage;
