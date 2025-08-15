import React from "react";
import { AuthProvider } from "./AuthProvider";
import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "./LanguageProvider";

const GlobalProviders = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default GlobalProviders;
