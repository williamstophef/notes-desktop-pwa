/** Vendors */
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

/** Custom components */
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function NotesLayout() {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content className="w-100">
        <Navbar />
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}

export default NotesLayout;
