/** Vendors */
import { FaRegBell } from "react-icons/fa";
import { UserAddOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Dropdown, Flex, Input, Layout, Row } from "antd";

function Navbar() {
  const items = [
    {
      key: "1",
      label: "Test Notification",
    },
  ];

  return (
    <Layout.Header>
      <Row align="middle" gutter={[12, 12]} justify="space-between">
        <Col lg={6} md={8} sm={10} xs={0}>
          <Input placeholder="Search" size="large" />
        </Col>
        <Col flex={1} />
        <Col lg={10} md={12} sm={10} xs={24}>
          <Flex align="center" flex="100px 1" gap={24} justify="flex-end">
            <Dropdown
              className="mt-auto"
              menu={{ items }}
              placement="bottomRight"
            >
              <Badge count={3} offset={[-4, 5]}>
                <Button type="text">
                  <FaRegBell style={{ fontSize: "1.4rem" }} />
                </Button>
              </Badge>
            </Dropdown>
            <Button icon={<UserAddOutlined />} size="large" type="text">
              Hello, Chris
            </Button>
          </Flex>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default Navbar;
