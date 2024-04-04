/** Vendors */
import { AppstoreOutlined } from "@ant-design/icons";
import { PiNotepad } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

function Sidebar() {
  const navigate = useNavigate();

  const items = [
    {
      icon: <PiNotepad style={{ fontSize: "2rem" }} />,
      key: "sidebar-1",
      label: "Notes",
      onClick: () => navigate("/"),
    },
    {
      key: "sidebar-2",
      icon: <AppstoreOutlined style={{ fontSize: "2rem" }} />,
      label: "Categories",
      onClick: () => navigate("/categories"),
    },
  ];

  return (
    <Layout.Sider>
      <div className="logo" />
      <Menu
        items={items}
        mode="inline"
        style={{
          backgroundColor: "inherit",
          paddingTop: "20px",
        }}
      />
    </Layout.Sider>
  );
}

export default Sidebar;
