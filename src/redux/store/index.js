import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import search from "../reducers/search";

const store = configureStore({
  reducer: {
    favourite: favouritesReducer,
    search: search,
  },
});

export default store;
