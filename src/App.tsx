import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
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
  // TODO: create theme

  return (
    <Router>
      <Stack
        sx={{ m: "auto", height: "100vh" }}
        spacing={2}
        justifyContent="space-between"
      >
        <Navbar />
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
    </Router>
  );
}

export default App;
