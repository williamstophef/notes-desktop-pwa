/** Vendors */
import { AppstoreOutlined } from "@ant-design/icons";
import { PiNotepad } from "react-icons/pi";
import { Layout, Menu } from "antd";

function Sidebar() {
  const items = [
    {
      className: "item1",
      icon: <PiNotepad style={{ fontSize: "35px" }} />,
      key: "sidebar-1",
      label: "notes",
    },
    {
      key: "sidebar-2",
      icon: <AppstoreOutlined style={{ fontSize: "35px" }} />,
      label: "overview",
      className: "item2",
    },
  ];

  return (
    <Layout.Sider
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div className="demo-logo-vertical" style={{ marginBottom: "20px" }} />
      <Menu
        items={items}
        mode="inline"
        style={{
          backgroundColor: "#3333ff",
          paddingTop: "20px",
        }}
        theme="light"
      />
    </Layout.Sider>
  );
}

export default Sidebar;
