import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMovies(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upComingMovies = action.payload.upComingMovies;
      state.isLoading = true;
    },
    setLoading(state, action) {
      state.isLoading = false;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
