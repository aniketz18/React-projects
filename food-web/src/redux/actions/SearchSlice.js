import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  categoty: "",
  price: "",
  rating: "",
};

export const searchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilter: (state,action) => { 
      state.search = action.payload
    },
    categotyFilter: (state) => {
      state.value -= 1;
    },
    priceFilter: (state, action) => {
      state.value += action.payload;
    },
    ratingFilter: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { searchFilter, categotyFilter, priceFilter, ratingFilter } =
  searchSlice.actions;
export default searchSlice.reducer;
