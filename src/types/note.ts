export interface INote {
  id: number;
  html: string;
  resource_id: "note" | string;
  resource_name: string;
  title: string;
}
