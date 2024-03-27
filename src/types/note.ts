import { NoteCategory } from "./enums";

export interface INote {
  category: NoteCategory;
  id: number;
  html: string;
  resource_id: "note" | string;
  resource_name: string;
  title: string;
  text: string;
}
