import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import zeebo from "./assets/zeebo.png";
import Navbar from "./components/Navbar";

const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
// Requirements:
/*
- List of projects with github pages
    - dynamic links based off github API
*/

function App() {
  // create theme

  return (
    <Stack sx={{ m: "auto" }}>
      <Router>
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
        <Box
          alt="Josh's cat zeebo"
          component="img"
          src={zeebo}
          sx={{
            bottom: 0,
            height: "100px",
            left: 0,
            position: "fixed",
            width: "100px",
          }}
        ></Box>
      </Router>
    </Stack>
  );
}

export default App;
