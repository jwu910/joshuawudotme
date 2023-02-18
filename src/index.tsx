import React from "react";
// eslint-disable-next-line import/no-unresolved
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
