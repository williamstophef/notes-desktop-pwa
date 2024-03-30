/** Vendor */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Custom Actions */
import * as types from "../actions/types";
import initialState from "./initialState";

/** Types */
import type { IRootState } from "../configureStore";

const toggle = createReducer(initialState.toggle, (builder) => {
  builder
    .addCase(
      createAction(types.TOGGLE_NOTE_MODAL),
      (state: IRootState["toggle"]) => {
        return { ...state, noteModal: !state.noteModal };
      }
    )
    .addCase(
      createAction(types.TOGGLE_NOTE_CATEGORY_MODAL),
      (state: IRootState["toggle"]) => {
        return { ...state, categoryModal: !state.categoryModal };
      }
    )
    .addDefaultCase((state) => state);
});

export default toggle;
