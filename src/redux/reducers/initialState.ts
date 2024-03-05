/** Types */
import type { INote } from "types";

interface IInitialState {
  note: {
    details: INote;
    list: INote[];
  };
}

const initialState: IInitialState = {
  note: {
    details: {} as INote,
    list: [],
  },
};

export default initialState;
