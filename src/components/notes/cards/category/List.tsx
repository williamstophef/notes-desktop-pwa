import React from "react";

/** Vendors */
import { Col, Row } from "antd";

/** Custom Components */
import Category from "./Category";

/** Types */
import type { ICategory } from "types";

interface INotesList {
  actions: {
    onToggle: (category: ICategory) => () => void;
  };
  categories: ICategory[];
}

function List({ actions, categories }: INotesList) {
  return (
    <Row align="middle" className="w-100" gutter={[24, 24]} justify="start">
      {categories.map((category: ICategory) => (
        <Col key={category.resource_name} lg={6} md={8} sm={12} xs={24}>
          <Category actions={actions} category={category} />
        </Col>
      ))}
    </Row>
  );
}

export default List;
