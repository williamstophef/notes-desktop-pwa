/** Vendors */
import { Button, Card, Typography } from "antd";

/** Types */
import type { INote } from "types";

interface INoteProps {
  actions: {
    onToggle: (note: INote) => () => void;
  };
  note: INote;
}

function Note({ actions, note }: INoteProps) {
  return (
    <Card
      extra={
        <Button onClick={actions.onToggle(note)} size="small" type="text">
          Edit
        </Button>
      }
      title={note.title}
    >
      <Typography.Title level={3}>{note.title}</Typography.Title>
      <Typography.Paragraph>{note.html}</Typography.Paragraph>
    </Card>
  );
}

export default Note;
