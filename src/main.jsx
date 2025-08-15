// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalProviders from "./infrastructure/providers";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./infrastructure/adapters/state/store";
import { i18nAdapter } from './infrastructure/adapters/i18n/i18nAdapter';

// Initialise i18n avant de rendre l’app
i18nAdapter.init().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <GlobalProviders>
          <App />
        </GlobalProviders>
      </ReduxProvider>
    </React.StrictMode>
  );
});
