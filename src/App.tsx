import { Container, CssBaseline, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JWThemeProvider from "./context/theme";

const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
// Requirements:
/*
- List of projects with github pages
    - dynamic links based off github API
*/

function App() {
  return (
    <>
      <JWThemeProvider>
        <CssBaseline enableColorScheme />
        <Router>
          <Navbar />
          <Container
            aria-label="main content"
            disableGutters
            maxWidth="md"
            sx={{ height: "100%" }}
          >
            <Container disableGutters sx={{ height: "100%" }}>
              <Stack
                sx={{ height: "100%", display: "flex" }}
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
                <Footer />
              </Stack>
            </Container>
          </Container>
        </Router>
      </JWThemeProvider>
    </>
  );
}

export default App;
