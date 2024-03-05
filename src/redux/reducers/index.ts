/** Vendors */
import { combineReducers } from "@reduxjs/toolkit";

/** Redux Reducers */
import note from "./note";

const root = combineReducers({
  note,
});

export default root;
