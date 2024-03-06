/** Vendors */
import { Button, Card, Typography } from "antd";

/** Types */
import type { INote } from "../../../types";

interface INoteProps {
  note: INote;
  actions: {
    onToggleModal: (note: INote) => void;
  };
}

function Note({ actions, note }: INoteProps) {
  return (
    <Card
      extra={
        <Button
          onClick={() => actions.onToggleModal(note)}
          size="small"
          type="text"
        >
          Edit
        </Button>
      }
      style={{
        width: "350px",
        height: "225px",
        marginLeft: "25px",
        border: "1px solid #d9d9d9",
      }}
      title={note.title}
    >
      <Typography.Title level={3}>{note.title}</Typography.Title>
      <Typography.Paragraph>{note.html}</Typography.Paragraph>
    </Card>
  );
}

export default Note;
