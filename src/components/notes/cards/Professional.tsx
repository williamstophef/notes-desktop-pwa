/** Vendor */
import React from "react";

/** Redux */
import { IRootState } from "@redux/configureStore";
import { useSelector } from "react-redux";

/** Custom */
import { INote } from "../../../types";
import Note from "./Note";
import { NoteCategory } from "../../../types";

function Professional() {
  const actions = {
    onToggleModal: (note: INote): void => {
      throw new Error("Function not implemented.");
    },
  };

  const notes = useSelector((state: IRootState) => state.note.list);

  const filteredNotes = notes.filter(
    (note: INote) => note.category === NoteCategory.Professional
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} actions={actions} />
      ))}
    </div>
  );
}

export default Professional;
