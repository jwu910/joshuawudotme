import { Container, CssBaseline } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { fetchRepositories } from './api/projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JWThemeProvider from './context/theme';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

// import { Suspense } from "react";
// const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
// const HomePage = React.lazy(() => import("./pages/HomePage"));
// Requirements:
/*
- List of projects with github pages
    - dynamic links based off github API
*/

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "projects",
  //     loader: async () => {
  //       return fetchRepositories();
  //     },
  //     element: <ProjectsPage />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <ContactPage />,
  //   },
  // ]);
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
        {/* <Router> */}
        <Navbar />
        <Container maxWidth="md" sx={{ height: "auto" }}>
          <React.Suspense fallback={<CircularProgress />}>
            <RouterProvider router={router} />
          </React.Suspense>
          <Footer />
        </Container>
        {/* </Router> */}
      </JWThemeProvider>
    </>
  );
}

export default App;
