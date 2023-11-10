import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  movieDetail: {
    youtubeId: "",
  },
  movieReview: {},
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
    setLoading(state) {
      state.isLoading = false;
    },
    getMovieDetail(state, action) {
      console.log(action);
      state.movieDetail = action.payload.movieDetail;
      state.movieDetail.youtubeId = action.payload.movieYoutubeId;
      state.movieReview = action.payload.movieReview;
      state.isLoading = true;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
