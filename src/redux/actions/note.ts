/** Redux */
import * as types from "./types";

/** Types */
import type { IAppDispatch } from "../configureStore";
import type { ICategory, INote, ISearchCategories, ISearchNotes } from "types";

/** Note Category Actions */
export function createCategoryAction(category: ICategory) {
  return (dispatch: IAppDispatch) => {
    dispatch({ category, type: types.CREATE_NOTE_CATEGORY_SUCCESS });
  };
}

export function deleteCategoryAction(category: ICategory) {
  return (dispatch: IAppDispatch) => {
    dispatch({ category, type: types.DELETE_NOTE_CATEOGRY_SUCCESS });
  };
}

export function getCategoryAction(category: ICategory) {
  return (dispatch: IAppDispatch) => {
    dispatch({ category, type: types.GET_NOTE_CATEOGRY_SUCCESS });
  };
}

export function searchCategoriesAction(search: ISearchCategories) {
  return (dispatch: IAppDispatch) => {
    dispatch({ search, type: types.SEARCH_NOTE_CATEOGRIES_SUCCESS });
  };
}

export function updateCategoryAction(category: ICategory) {
  return (dispatch: IAppDispatch) => {
    dispatch({ category, type: types.UPDATE_NOTE_CATEOGRY_SUCCESS });
  };
}

/** Category Actions */
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
