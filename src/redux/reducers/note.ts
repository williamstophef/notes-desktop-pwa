/** Vendor */
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Custom Actions */
import * as types from "../actions/types";
import initialState from "./initialState";
import redux from "../../dist/js/redux";

/** Enums */
import { ResourceId } from "types";

/** Types */
import type { AnyAction, IRootState } from "../configureStore";

const note = createReducer(initialState.note, (builder) => {
  builder
    .addCase(
      createAction(types.CREATE_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return redux.addResource(state, action, ResourceId.Note);
      }
    )
    .addCase(
      createAction(types.DELETE_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return redux.removeMatchCase(state, action, ResourceId.Note);
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
        return redux.joinOrOverwrite(state, action);
      }
    )
    .addCase(
      createAction(types.UPDATE_NOTE_SUCCESS),
      (state: IRootState["note"], action: AnyAction) => {
        return redux.updateMatchCase(state, action, ResourceId.Note);
      }
    );

  /** Note Categories */
  builder
    .addCase(
      createAction(types.CREATE_NOTE_CATEGORY_SUCCESS),
      (state, action) => ({
        ...state,
        category: redux.addResource(state, action, ResourceId.Category),
      })
    )
    .addCase(
      createAction(types.DELETE_NOTE_CATEGORY_SUCCESS),
      (state, action) => ({
        ...state,
        category: redux.removeMatchCase(state, action, ResourceId.Category),
      })
    )
    .addCase(
      createAction(types.SEARCH_NOTE_CATEGORIES_SUCCESS),
      (state, action) => ({
        ...state,
        category: redux.joinOrOverwrite(state, action),
      })
    )
    .addCase(
      createAction(types.UPDATE_NOTE_CATEGORY_SUCCESS),
      (state, action) => ({
        ...state,
        category: redux.udpateMatchCase(state, action, ResourceId.Category),
      })
    )
    .addDefaultCase((state) => state);
});

export default note;
