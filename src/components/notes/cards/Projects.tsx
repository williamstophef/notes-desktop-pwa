/** Vendor */
import React from "react";

/** Redux */
import { IRootState } from "@redux/configureStore"; // Path might need adjustment
import { useSelector } from "react-redux";

/** Custom */
import Note from "./Note"; // Assuming this is your component for rendering individual notes
import { INote } from "../../../types/note";

function Projects() {
  // Select notes from Redux store
  const notes = useSelector((state: IRootState) => state.note.list);

  // Filter notes specifically for the 'Projects' category
  const filteredNotes = notes.filter((note) => note.category === "Projects");

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

export default Projects;
