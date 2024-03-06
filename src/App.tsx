import React from "react";

/** Vendors */
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";

/** Router */
import routes from "./router";

const App: React.FC = () => {
  const theme = {
    components: {
      Layout: {
        siderBg: "#3333ff",
        headerBg: "#ffffff",
        bodyBg: "#f2f2f2",
      },
      Modal: {
        contentBg: "#ffffff",
      },
    },
    // 1. Use light algorithm
    token: {},
  };

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
};

export default App;
