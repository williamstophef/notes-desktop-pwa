import React, { useState } from "react";

/** Vendorts */
import { CiCirclePlus } from "react-icons/ci";
import type { TabsProps } from "antd";
import { Button, Col, Row, Tabs } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All",
    children: <div>1</div>,
  },
  {
    key: "2",
    label: "Projects",
    children: <div>2</div>,
  },
  {
    key: "3",
    label: "Business",
    children: <div>3</div>,
  },
  {
    key: "4",
    label: "Professional",
    children: <div>4</div>,
  },
];

function Home() {
  const [notes, setNotes] = useState([
    { title: "Note 1", html: "Content for Note 1" },
  ]);

  const addNewNote = () => {
    const newNote = { title: "New Note", html: "Content for the new note" };
    setNotes([...notes, newNote]);
  };

  return (
    <React.Fragment>
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
          <Tabs defaultActiveKey="1" items={items} />
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
            onClick={addNewNote}
          >
            Add new note
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
