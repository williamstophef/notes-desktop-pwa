/** Vendors */
import { useEffect } from "react";
import { Button, Form, Input, Modal, Select } from "antd";

/** Redux */
import toggleAction from "@redux/actions/toggle";
import { createNoteAction, updateNoteAction } from "@redux/actions/note";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Custom Methods */
import { createResourceName } from "@dist/js/support";

/** Enums */
import { ResourceId, ToggleResource } from "types";

/** Types */
import type { INote } from "types";
import type { IRootState } from "@redux/configureStore";

function NoteModal() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const { categories, note, show } = useAppSelector((state: IRootState) => ({
    categories: state.note.category.list || [],
    note: state.note.details,
    show: state.toggle.noteModal,
  }));

  /** Step 1. Set the form fields */
  useEffect(() => {
    form.setFieldsValue(note);
    return () => form.resetFields();
  }, [note.resource_name, show]);

  const localActions = {
    onFinish: () => {
      const timestamp = new Date().getTime();
      const values: INote = form.getFieldsValue(true);

      const params: INote = {
        created: timestamp,
        resource_id: ResourceId.Note,
        timestamp,
        updated: timestamp,
        resource_name: createResourceName(ResourceId.Note),
        ...values,
      };

      const execute = values?.resource_name
        ? updateNoteAction
        : createNoteAction;

      dispatch(execute(params));

      localActions.onToggle();
    },
    onToggle: () => {
      dispatch(toggleAction({ resource: ToggleResource.NoteModal }));
    },
  };

  return (
    <Modal
      footer={false}
      onCancel={localActions.onToggle}
      open={show}
      title="Note"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={localActions.onFinish}
        size="large"
      >
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true }]}
        >
          <Select
            options={categories.map((category) => ({
              key: category.resource_name,
              label: category.name,
              value: category.resource_name,
            }))}
          />
        </Form.Item>
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input placeholder="The Dog Ate My Lunch" />
        </Form.Item>
        <Form.Item label="Notes" name="html">
          <Input.TextArea placeholder="He is still a good boy" rows={10} />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Save Note
        </Button>
      </Form>
    </Modal>
  );
}

export default NoteModal;
