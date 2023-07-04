import { Container, CssBaseline } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { fetchRepositories } from "./api/projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JWThemeProvider from "./context/theme";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="/projects"
          loader={fetchRepositories}
          element={<ProjectsPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );

  return (
    <>
      <JWThemeProvider>
        <CssBaseline enableColorScheme />
        <Navbar />
        <Container maxWidth="md" sx={{ height: "auto" }}>
          <React.Suspense fallback={<CircularProgress />}>
            <RouterProvider router={router} />
          </React.Suspense>
          <Footer />
        </Container>
      </JWThemeProvider>
    </>
  );
}

export default App;
