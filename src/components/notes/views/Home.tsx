import React from "react";

/** Vendors */
import { CiCirclePlus } from "react-icons/ci";
import { Button, Flex, Tabs } from "antd";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Types */
import type { IRootState } from "@redux/configureStore";
import type { TabsProps } from "antd";

function Home() {
  const dispatch = useAppDispatch();

  /** Step 1. Get Redux State */
  const { notes } = useAppSelector((state: IRootState) => ({
    notes: state.note.list,
  }));

  const actions = {
    create: () => {
      const note: INote = {
        resource_id: "note",
        resource_name: `note-${new Date().getTime()}`,
        text: "Content for the new note",
        title: "New Note",
      };
      dispatch(createNoteAction(note));
    },
  };

  const items: TabsProps["items"] = [
    {
      key: "home-note-tab-0",
      label: "All",
      children: (
        <div>
          {notes.map((note: INote) => (
            <div>{note.title}</div>
          ))}
        </div>
      ),
    },
    {
      key: "home-note-tab-1",
      label: "Projects",
      children: <div>2</div>,
    },
    {
      key: "home-note-tab-2",
      label: "Business",
      children: <div>3</div>,
    },
    {
      key: "home-note-tab-3",
      label: "Professional",
      children: <div>4</div>,
    },
  ];

  return (
    <Flex className="p-3">
      <Tabs
        className="w-100"
        defaultActiveKey="home-note-tab-0"
        items={items}
        tabBarExtraContent={
          <Button
            icon={<CiCirclePlus />}
            onClick={actions.create}
            size="large"
            type="text"
          >
            Add Note
          </Button>
        }
      />
    </Flex>
  );
}

export default Home;
