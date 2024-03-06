/** Vendor */
import { useEffect, useState } from "react";

/** Custom */
import type { INote } from "../types";
import { openDB, NOTE_STORE_NAME } from "../services/indexedDB";

function useStorage() {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    getNotes(); // Load notes from IndexedDB when the component mounts
  }, []);

  const getNotes = async () => {
    const db = await openDB();
    const transaction = db.transaction(NOTE_STORE_NAME, "readonly");
    const store = transaction.objectStore(NOTE_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      setNotes(request.result);
    };

    request.onerror = () => {
      console.error("Error fetching notes from database");
    };
  };

  const createNote = async (newNote: INote) => {
    const db = await openDB();
    const transaction = db.transaction(NOTE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(NOTE_STORE_NAME);
    store.add(newNote);

    transaction.oncomplete = () => {
      getNotes(); // Refresh the notes after adding
    };
  };

  const updateNote = async (updatedNote: INote) => {
    const db = await openDB();
    const transaction = db.transaction(NOTE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(NOTE_STORE_NAME);
    store.put(updatedNote);

    transaction.oncomplete = () => {
      getNotes(); // Refresh the notes after updating
    };
  };

  const deleteNote = async (noteId: number) => {
    const db = await openDB();
    const transaction = db.transaction(NOTE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(NOTE_STORE_NAME);
    store.delete(noteId);

    transaction.oncomplete = () => {
      getNotes(); // Refresh the notes after deleting
    };
  };

  const actions = {
    create: createNote,
    delete: deleteNote,
    get: getNotes,
    update: updateNote,
  };

  return { actions, notes };
}

export default useStorage;
