/** Vendors */
import { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";

/** Custom */

/** Types */
import type { INote } from "../../../types";

interface INoteProps {
  actions: { onToggleModal: (note: INote) => void };
  note?: INote;
  show: boolean;
}

function Modals({ actions, note, show }: INoteProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(note);
  }, [note]);

  const localActions = {
    onCancel: () => {
      actions.onToggleModal({} as INote);
    },
    onFinish: () => {
      const values = form.getFieldsValue(true);
      console.log(values);
      /** Store updated values here... */
      actions.onToggleModal({} as INote);
    },
  };

  return (
    <Modal
      centered
      footer={false}
      onCancel={localActions.onCancel}
      onOk={localActions.onCancel}
      open={show}
    >
      <Form form={form} onFinish={localActions.onFinish}>
        <Form.Item label="Title" name="title" required>
          <Input />
        </Form.Item>
        <Form.Item label="Notes" name="html">
          <Input.TextArea rows={32} />
        </Form.Item>
        <Button htmlType="submit">Save Note</Button>
      </Form>
    </Modal>
  );
}

export default Modals;
