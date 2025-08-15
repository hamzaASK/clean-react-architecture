// infrastructure/providers/StateProvider.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "../adapters/state/store";

const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
