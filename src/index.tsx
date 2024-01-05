import "./index.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { fetchRepositories } from "./api/projects";
import BasePage from "./components/BasePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BasePage />}>
      <Route index path="/" element={<HomePage />} />
      <Route
        path="/projects"
        loader={fetchRepositories}
        element={<ProjectsPage />}
      />
      <Route path="/contact" element={<ContactPage />} />
    </Route>,
  ),
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
