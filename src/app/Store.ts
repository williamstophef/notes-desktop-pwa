/** Vendor */
import { configureStore } from "@reduxjs/toolkit";

/** Custom */
import noteReducer from "../features/notes/NoteSlice";

export const Store = configureStore({
  reducer: {
    note: noteReducer,
  },
});
