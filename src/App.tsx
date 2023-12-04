import React from "react";

//  Vendors
import { FaRegBell } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { AppstoreOutlined, UserAddOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Input,
  Layout,
  Menu,
  Row,
  theme,
} from "antd";

import { PiMagnifyingGlassBold, PiNotepad } from "react-icons/pi";

const App: React.FC = () => {
  const { Content, Header, Sider } = Layout;

  return (
    <ConfigProvider
      theme={{
        // 1. Use light algorithm
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <Layout>
        <Sider
          style={{
            backgroundColor: "#3333ff",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <div
            className="demo-logo-vertical"
            style={{ marginBottom: "20px" }}
          />
          <Menu
            items={[
              {
                key: "1",
                icon: <PiNotepad style={{ fontSize: "35px" }} />,
                label: "notes",
                className: "item1",
              },
              {
                key: "2",
                icon: <AppstoreOutlined style={{ fontSize: "35px" }} />,
                label: "overview",
                className: "item2",
              },
            ]}
            mode="inline"
            style={{
              backgroundColor: "#3333ff",
              paddingTop: "20px",
            }}
            theme="light"
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "#ffffff",
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
          </Header>
          <Content style={{ backgroundColor: "#f2f2f2" }}>
            <Row
              align="middle"
              gutter={12}
              style={{
                marginBottom: "25px",
                marginTop: "25px",
                marginLeft: "75px",
              }}
            >
              <Col>
                <Button
                  size="large"
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                  type="text"
                >
                  All
                </Button>
              </Col>
              <Col>
                <Button
                  size="large"
                  style={{ width: "100px", textAlign: "center" }}
                  type="text"
                >
                  Projects
                </Button>
              </Col>
              <Col>
                <Button
                  size="large"
                  style={{ width: "100px", textAlign: "center" }}
                  type="text"
                >
                  Business
                </Button>
              </Col>
              <Col>
                <Button
                  size="large"
                  style={{ width: "100px", textAlign: "center" }}
                  type="text"
                >
                  Personal
                </Button>
              </Col>
              <Col>
                <Button
                  icon={<CiCirclePlus />}
                  size="large"
                  style={{
                    textAlign: "center",
                    left: "910px",
                    color: "#3333ff",
                  }}
                  type="text"
                >
                  Add new note
                </Button>
              </Col>
            </Row>
            <Row
              align="middle"
              gutter={[12, 12]}
              style={{ marginLeft: "25px" }}
            >
              <Col>
                <Card
                  title={new Date().toLocaleDateString()}
                  extra={<a href="#">More</a>}
                  style={{
                    width: "350px",
                    height: "300px",
                    marginLeft: "25px",
                  }}
                >
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </Col>
              <Col>
                <Card
                  title={new Date().toLocaleDateString()}
                  extra={<a href="#">More</a>}
                  style={{
                    width: "350px",
                    height: "300px",
                    marginLeft: "25px",
                  }}
                >
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </Col>
              <Col>
                <Card
                  title={new Date().toLocaleDateString()}
                  extra={<a href="#">More</a>}
                  style={{
                    width: "350px",
                    height: "300px",
                    marginLeft: "25px",
                  }}
                >
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </Col>
              <Col>
                <Card
                  title={new Date().toLocaleDateString()}
                  extra={<a href="#">More</a>}
                  style={{
                    width: "350px",
                    height: "300px",
                    marginLeft: "25px",
                  }}
                >
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
