/** Vendors */
import { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";

/** Redux */
import toggleAction from "@redux/actions/toggle";
import {
  createCategoryAction,
  updateCategoryAction,
} from "@redux/actions/note";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Custom Methods */
import { createResourceName } from "@dist/js/support";

/** Enums */
import { ResourceId, ToggleResource } from "types";

/** Types */
import type { ICategory } from "types";
import type { IRootState } from "@redux/configureStore";

function CategoryModal() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const { category, show } = useAppSelector((state: IRootState) => ({
    category: state.note.category.details,
    show: state.toggle.categoryModal,
  }));

  /** Step 1. Set the form fields */
  useEffect(() => {
    form.setFieldsValue(category);
    return () => form.resetFields();
  }, [category.resource_name, show]);

  const localActions = {
    onFinish: () => {
      const values: ICategory = form.getFieldsValue(true);
      const timestamp = new Date().getTime();

      const params: ICategory = {
        created: timestamp,
        resource_id: ResourceId.Category,
        timestamp,
        updated: timestamp,
        resource_name: createResourceName(ResourceId.Category),
        ...values,
      };

      const execute = values?.resource_name
        ? updateCategoryAction
        : createCategoryAction;

      dispatch(execute(params));

      localActions.onToggle();
    },
    onToggle: () => {
      dispatch(toggleAction({ resource: ToggleResource.CategoryModal }));
    },
  };

  return (
    <Modal
      centered
      footer={false}
      onCancel={localActions.onToggle}
      open={show}
      title="Note Category"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={localActions.onFinish}
        size="large"
      >
        <Form.Item label="Category Name" name="name" required>
          <Input placeholder="Super Cool Category Name" />
        </Form.Item>
        <Button htmlType="submit">Save Category</Button>
      </Form>
    </Modal>
  );
}

export default CategoryModal;
