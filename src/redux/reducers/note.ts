/** Vendor */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Custom Actions */
import * as types from "../actions/types";
import initialState from "./initialState";

/** Types */
import type { IRootState } from "../configureStore";

const note = createReducer(initialState.note, (builder) => {
  builder
    .addCase(
      createAction(types.CREATE_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return {
          ...state,
          details: action.note,
          list: [...state.list, action.note],
        };
      }
    )
    .addCase(
      createAction(types.DELETE_NOTE_SUCCESS),
      (state: IRootState["note"]) => {
        return {
          ...state,
          details: {},
          list: state.list.filter((note) => {
            return note.resource_name !== action.note?.resource_name;
          }),
        };
      }
    )
    .addCase(
      createAction(types.GET_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return { ...state, details: action.note };
      }
    )
    .addCase(
      createAction(types.SEARCH_NOTES_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return { ...state, list: action.results };
      }
    )
    .addCase(
      createAction(types.UPDATE_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return {
          ...state,
          details: { ...state.details, ...action.note },
          list: state.list.map((note) => {
            return note.resource_name === action.note.resource_name
              ? { ...note, ...action.note }
              : note;
          }),
        };
      }
    )
    .addDefaultCase((state) => state);
});

export default note;
