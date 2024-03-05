/** Vendor */
import App from "./App.tsx";
import { Provider } from "react-redux";
import React from "react";
/** Custom */
import "./index.css";
import ReactDOM from "react-dom/client";
import { Store } from "./app/Store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
