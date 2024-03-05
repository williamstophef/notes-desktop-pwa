//  Vendors
import { FaRegBell } from "react-icons/fa";
import { UserAddOutlined } from "@ant-design/icons";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Button, Col, Input, Layout, Menu, Row } from "antd";

function Navbar() {
  return (
    <Layout.Header
      style={{
        width: "100%",
      }}
    >
      <Row align="middle" gutter={[12, 12]} justify="space-between">
        <Col lg={8} md={10} sm={12} xs={24}>
          <Input
            placeholder="Search"
            prefix={<PiMagnifyingGlassBold />}
            size="large"
          />
        </Col>
        <Col flex={1} />
        <Col
          lg={8}
          md={10}
          sm={12}
          xs={24}
          style={{ alignItems: "center", display: "flex", left: "275px" }}
        >
          <Button icon={<UserAddOutlined />} size="large" type="text">
            Hello, Chris
          </Button>
          <Menu
            items={[
              {
                children: [
                  { key: "menu-option-0", label: "Test Notification" },
                ],
                key: "4",
                icon: <FaRegBell />,
                label: "test",
              },
            ]}
            mode="horizontal"
            style={{ backgroundColor: "inherit" }}
          />
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default Navbar;
