import { createSlice } from "@reduxjs/toolkit";
const modalcardsSlice = createSlice({
  name: "modal",
  initialState: {
    modalList: { show: false },
  },
  reducers: {
    display(state) {
      state.modalList.show = true;
    },
    displaynone(state) {
      state.modalList.show = false;
    },
  },
});
export const modalActions = modalcardsSlice.actions;
export default modalcardsSlice;
