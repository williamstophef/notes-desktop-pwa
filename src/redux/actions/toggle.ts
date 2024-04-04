/** Redux */
import * as types from "./types";

/** Enums */
import { ToggleResource } from "types";

/** Types */
import type { IAppDispatch } from "../configureStore";

interface IToggleAction {
  details: any | void;
  resource: ToggleResource;
}

export default function toggleAction({ resource, ...rest }: IToggleAction) {
  return (dispatch: IAppDispatch) => {
    let type = types.TOGGLE_NOTE_MODAL;
    switch (resource) {
      case ToggleResource.CategoryModal:
        type = types.TOGGLE_NOTE_CATEGORY_MODAL;
        break;
      case ToggleResource.NoteModal:
        type = types.TOGGLE_NOTE_MODAL;
        break;
      default:
        type = types.TOGGLE_NOTE_MODAL;
    }
    dispatch({ ...rest, type });
  };
}
