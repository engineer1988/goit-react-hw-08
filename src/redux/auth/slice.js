import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "filters",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  //   reducers: {
  //     changeFilter(state, action) {
  //       state.name = action.payload;
  //     },
  //   },
});

// export const selectNameFilter = (state) => {
//   return state.filters.name;
// };

export const authReducer = authSlice.reducer;
