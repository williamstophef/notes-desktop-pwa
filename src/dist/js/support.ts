/** Enums */
import { ResourceId } from "types";

export function createResourceName(resource: ResourceId) {
  return `${resource}-${keygen()}`;
}

export function keygen() {
  let d =
    new Date().getTime() + Math.floor(Math.random() * 1000000000000000000);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
