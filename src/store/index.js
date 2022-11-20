import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import modalcardsSlice from "./modalcardsSlice";
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    modal: modalcardsSlice.reducer,
  },
});
export default store;
