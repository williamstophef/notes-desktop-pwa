/** Vendor */
import React from "react";

/** Redux */
import { IRootState } from "@redux/configureStore";
import { useSelector } from "react-redux";

/** Custom */
import Note from "./Note";
import { INote } from "../../../types/note";

function Business() {
  const notes = useSelector((state: IRootState) => state.note.list);

  const filteredNotes = notes.filter((note) => note.category === "Business");

  return (
    <div>
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          actions={{
            onToggleModal: function (_note: INote): void {
              throw new Error("Function not implemented.");
            },
          }}
        />
      ))}
    </div>
  );
}

export default Business;
