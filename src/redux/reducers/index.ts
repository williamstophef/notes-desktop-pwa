/** Vendors */
import { combineReducers } from "@reduxjs/toolkit";

/** Redux Reducers */
import note from "./note";
import toggle from "./toggle";

const root = combineReducers({
  note,
  toggle,
});

export default root;
