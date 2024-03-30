/** Vendors */
import { CiCirclePlus } from "react-icons/ci";
import { Button, Flex, Tabs } from "antd";

/** Redux */
import toggleAction from "@redux/actions/toggle";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Custom Components */
import NotesList from "../cards/note/List";

/** Enums */
import { ResourceId, ToggleResource } from "types";

/** Types */
import type { IRootState } from "@redux/configureStore";
import type { TabsProps } from "antd";
import type { ICategory, INote } from "types";

interface IFilterNotes {
  category: ICategory;
  notes: INote[];
}

function NotesView() {
  const dispatch = useAppDispatch();

  const { categories, notes } = useAppSelector((state: IRootState) => ({
    categories: state.note.category.list,
    notes: state.note.list,
  }));

  const actions = {
    onFilter: ({ category, notes }: IFilterNotes) => {
      return notes.filter((note: INote) => {
        if (category) return note.category === category.resource_name;
        return true;
      });
    },
    onToggle:
      (props: Partial<ICategory | INote>): void =>
      () => {
        const params: any = { details: props };
        if (props.resource_id === ResourceId.Category) {
          params.resource = ToggleResource.CategoryModal;
        } else {
          params.resource = ToggleResource.NoteModal;
        }
        dispatch(toggleAction(params));
      },
  };

  const items: TabsProps["items"] = categories.map((category: string) => ({
    key: category.resource_name,
    label: category.name,
    children: <NotesList actions={actions} category={category} notes={notes} />,
  }));

  return (
    <Flex className="p-3">
      <Tabs
        className="w-100"
        defaultActiveKey={[items?.[0]?.key]}
        items={items}
        tabBarExtraContent={
          <Flex>
            <Button
              icon={<CiCirclePlus />}
              onClick={actions.onToggle({ resource_id: ResourceId.Category })}
              size="large"
              type="text"
            >
              Category
            </Button>
            <Button
              icon={<CiCirclePlus />}
              onClick={actions.onToggle({ resource_id: ResourceId.Note })}
              size="large"
              type="text"
            >
              Note
            </Button>
          </Flex>
        }
      />
    </Flex>
  );
}

export default NotesView;
