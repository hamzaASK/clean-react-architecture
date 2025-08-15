// infrastructure/adapters/storage/localStorageAdapter.js
export const localStorageAdapter = {
  setItem: (key, value) =>
    localStorage.setItem(key, JSON.stringify(value)),

  getItem: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  },

  removeItem: (key) => localStorage.removeItem(key),
};
