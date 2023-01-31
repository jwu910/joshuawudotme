import {
  Container,
  CssBaseline,
  Stack,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
// Requirements:
/*
- List of projects with github pages
    - dynamic links based off github API
*/

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          contrastThreshold: 3,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Navbar />
          <Container maxWidth="md">
            <Stack
              sx={{ pt: 12, height: "calc(100vh - 56px)" }}
              spacing={2}
              justifyContent="space-between"
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<CircularProgress />}>
                      <HomePage />
                    </Suspense>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <Suspense fallback={<CircularProgress />}>
                      <ProjectsPage />
                    </Suspense>
                  }
                />
              </Routes>
            </Stack>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
