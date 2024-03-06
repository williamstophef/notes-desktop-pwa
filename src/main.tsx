/** Vendors */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

/** Redux */
import store from "./redux/configureStore";

/** Custom Components */
import App from "./App";

/** Custom */
import "./dist/css/app.css";
import "./dist/css/card.css";
import "./dist/css/format.css";
import "./dist/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
