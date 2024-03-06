/** Vendor */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Card 1", content: "This is the card content" },
];

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
});

export default noteSlice.reducer;
