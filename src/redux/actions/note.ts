/** Redux */
import * as types from "./types";

/** Types */
import type { IAppDispatch } from "../configureStore";
import type { INote, ISearchNotes } from "types";

export function createNoteAction(note: INote) {
  return (dispatch: IAppDispatch) => {
    dispatch({ note, type: types.CREATE_NOTE_SUCCESS });
  };
}

export function deleteNoteAction(note: INote) {
  return (dispatch: IAppDispatch) => {
    dispatch({ note, type: types.DELETE_NOTE_SUCCESS });
  };
}

export function getNoteAction(note: INote) {
  return (dispatch: IAppDispatch) => {
    dispatch({ note, type: types.GET_NOTE_SUCCESS });
  };
}

export function searchNotesAction(search: ISearchNotes) {
  return (dispatch: IAppDispatch) => {
    dispatch({ search, type: types.SEARCH_NOTES_SUCCESS });
  };
}

export function updateNoteAction(note: INote) {
  return (dispatch: IAppDispatch) => {
    dispatch({ note, type: types.UPDATE_NOTE_SUCCESS });
  };
}
