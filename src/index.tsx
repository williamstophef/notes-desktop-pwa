import React from "react";

/** Vendors */
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

/** Redux */
import store from "./redux/configureStore";

/** Custom Components */
import App from "./App";

/** Custom */
import "./dist/css/app.css";
import "./dist/css/card.css";
import "./dist/css/color.css";
import "./dist/css/format.css";
import "./dist/css/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
