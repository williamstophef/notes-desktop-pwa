// import React from "react";

/** Vendors */
import type { TabsProps } from "antd";
import { CiCirclePlus } from "react-icons/ci";
import { Button, Flex, Tabs } from "antd";

/** Redux */
import { createNoteAction } from "@redux/actions/note";

/** Custom Hooks */
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

/** Custom */
import All from "../cards/All";
import Business from "../cards/Business";
import Professional from "../cards/Professional";
import Projects from "../cards/Projects";

/** Types */
import { INote, NoteCategory } from "../../../types";
import type { IRootState } from "@redux/configureStore";

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
        id: 0,
        html: "",
        category: NoteCategory.Business,
      };
      dispatch(createNoteAction(note));
    },
  };

  const items: TabsProps["items"] = [
    {
      key: "home-note-tab-0",
      label: "All",
      children: <All />,
    },
    {
      key: "home-note-tab-1",
      label: "Projects",
      children: <Projects />,
    },
    {
      key: "home-note-tab-2",
      label: "Business",
      children: <Business />,
    },
    {
      key: "home-note-tab-3",
      label: "Professional",
      children: <Professional />,
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
