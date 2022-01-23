import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store, persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const AppContainer = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default AppContainer;
