/** Vendors */
import { Outlet } from "react-router-dom";
import { ConfigProvider, Layout, theme } from "antd";

/** Custom components */
import LoadingScreen from "../loading/Screen";
import Modals from "../modal/Modals";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

/** Types */
import type { ThemeConfig } from "antd";

function NotesLayout() {
  const appTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
      borderRadius: 3,
      colorPrimary: "#d8bd14",
      colorInfo: "#d8bd14",
      colorSuccess: "#2f54eb",
      colorWarning: "#faad14",
      fontSize: 16,
      sizeStep: 4,
      sizeUnit: 5,
    },
  };

  return (
    <ConfigProvider theme={appTheme}>
      <LoadingScreen>
        <Layout>
          <Sidebar />
          <Layout.Content className="w-100">
            <Navbar />
            <Outlet />
          </Layout.Content>
          <Modals />
        </Layout>
      </LoadingScreen>
    </ConfigProvider>
  );
}

export default NotesLayout;
