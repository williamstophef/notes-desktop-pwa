/** Vendors */
import { CiCirclePlus } from "react-icons/ci";
import { Button, Flex } from "antd";

/** Redux */
import toggleAction from "@redux/actions/toggle";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Custom Components */
import CategoryList from "../cards/category/List";

/** Enums */
import { ResourceId, ToggleResource } from "types";

/** Types */
import type { ICategory } from "types";
import type { IRootState } from "@redux/configureStore";

function Categories() {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state: IRootState) => ({
    categories: state.note.category.list,
  }));

  const actions = {
    onToggle:
      (props: Partial<ICategory>): void =>
      () => {
        const params: any = {
          details: props,
          resource: ToggleResource.CategoryModal,
        };
        dispatch(toggleAction(params));
      },
  };

  return (
    <Flex className="p-3" vertical>
      <Flex flex={1} justify="flex-end">
        <Button
          icon={<CiCirclePlus />}
          onClick={actions.onToggle({ resource_id: ResourceId.Category })}
          size="large"
          type="text"
        >
          Category
        </Button>
      </Flex>
      <CategoryList actions={actions} categories={categories} />
    </Flex>
  );
}

export default Categories;
