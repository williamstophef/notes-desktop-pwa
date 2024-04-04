import React from "react";

/** Vendors */
import { App } from "antd";
import { RouterProvider } from "react-router-dom";

/** Router */
import routes from "./router";

function MainApp() {
  return (
    <App>
      <RouterProvider router={routes} />
    </App>
  );
}

export default MainApp;
