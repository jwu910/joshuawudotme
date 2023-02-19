import { Container, CssBaseline, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JWThemeProvider from "./context/theme";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

// const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
// const HomePage = React.lazy(() => import("./pages/HomePage"));
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
          <Container maxWidth="md" sx={{ height: "auto" }}>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </Container>
        </Router>
      </JWThemeProvider>
    </>
  );
}

export default App;
