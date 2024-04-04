import React from "react";

/** Vendors */
import { Col, Row } from "antd";

/** Custom Components */
import Note from "./Note";

/** Types */
import type { ICategory, INote } from "types";

interface INotesList {
  actions: {
    onFilter: (props: { category: ICategory; notes: INote[] }) => INote[];
    onToggle: (note: INote) => () => void;
  };
  category?: ICategory;
  notes: INote[];
}

function List({ actions, category, notes }: INotesList) {
  return (
    <Row align="middle" className="w-100" gutter={[24, 24]} justify="start">
      {actions.onFilter({ category, notes }).map((note: INote) => (
        <Col key={note.resource_name} lg={6} md={8} sm={12} xs={24}>
          <Note actions={actions} note={note} />
        </Col>
      ))}
    </Row>
  );
}

export default List;
