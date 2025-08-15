// infrastructure/logging/logger.js
export const logger = {
  log: (message) => {
    if (import.meta.env.MODE !== "production") {
      console.log(`[LOG]: ${message}`);
    }
  },

  error: (error) => {
    console.error(`[ERROR]:`, error);
    // Tu peux aussi envoyer à Sentry, LogRocket, etc.
  },
};
