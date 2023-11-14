import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "~react-pages";
import { EuiErrorBoundary, EuiLoadingSpinner } from "@elastic/eui";
import DefaultLayout from "./components/layouts/Default";

import "./icons";
import { EuiColorProvider } from "./providers/EuiColorProvider";
import { ThemeContextProvider } from "./context/ThemeContext";

export const App = () => {
  return (
    <Suspense fallback={<EuiLoadingSpinner size="xxl" />}>
      <ThemeContextProvider>
        <EuiColorProvider>
          <EuiErrorBoundary>
            <DefaultLayout>{useRoutes(routes)}</DefaultLayout>
          </EuiErrorBoundary>
        </EuiColorProvider>
      </ThemeContextProvider>
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
