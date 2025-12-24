import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import "./i18n";
import "./styles.css";
import "./styles/main.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>
);
