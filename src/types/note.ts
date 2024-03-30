/** Types */
import type { IBasicRecord } from "./common";

export interface ICategory extends IBasicRecord {
  name: string;
}

export interface INote extends IBasicRecord {
  category?: ICategory["resource_name"];
  html: string;
  title: string;
  text: string;
}

export interface ISearchCategories {
  text: string;
}

export interface ISearchNotes {
  text: string;
}
