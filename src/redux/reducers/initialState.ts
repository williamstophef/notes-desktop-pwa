/** Enums */
import { ResourceId } from "types";

/** Types */
import type { ICategory, INote, IStandardList } from "types";

const timestamp = new Date().getTime();

interface IInitialState {
  note: IStandardList<INote> & { category: IStandardList<ICategory> };
  toggle: { [key: string]: boolean };
}

const initialState: IInitialState = {
  note: {
    category: {
      details: {} as ICategory,
      list: [
        {
          created: timestamp,
          name: "All",
          resource_id: ResourceId.Category,
          resource_name: "primary-note-category",
          timestamp,
          updated: timestamp,
        },
      ],
    },
    details: {} as INote,
    list: [],
  },
  toggle: {
    categoryModal: false,
    noteModal: false,
  },
};

export default initialState;
