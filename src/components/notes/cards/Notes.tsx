/** Vendors */
import React, { useState } from "react";
import { Col, Row } from "antd";

/** Custom Hooks */
import useStorage from "../../../hooks/useStorage";

/** Custom Components */
import Note from "./Note";
import NoteModal from "../../shared/modal/Note";

/** Types */
import type { INote } from "../../../types";

function Notes() {
  const [details, setDetails] = useState<INote>();
  const [show, setShow] = useState<boolean>(false);
  const storage = useStorage();

  const actions = {
    onToggleModal: (note: INote) => {
      setDetails(note);
      setShow((state) => !state);
    },
  };

  return (
    <React.Fragment>
      <Row align="middle" gutter={[12, 12]} style={{ marginLeft: "25px" }}>
        {storage.notes.map((note: INote, index: number) => (
          <Col key={index}>
            <Note actions={actions} key={note.resource_name} note={note} />
          </Col>
        ))}
      </Row>
      <NoteModal actions={actions} note={details} show={show} />
    </React.Fragment>
  );
}

export default Notes;
