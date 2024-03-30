/** Enums */
import { ResourceId } from "./enums";

export interface IAnyObject {
  [key: string]: any;
}

export interface IBasicRecord {
  created: number;
  resource_id: ResourceId;
  resource_name: string;
  timestamp: number;
  updated: number;
}

export interface IStandardList<T> {
  details: T;
  dataSetKey?: string;
  list: T[];
}
