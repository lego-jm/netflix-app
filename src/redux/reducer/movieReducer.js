import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  movieDetail: {
    youtubeId: "",
  },
  movieReview: {},
  movieRelated: {},
  keyword: "",
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
      state.movieDetail = action.payload.movieDetail;
      state.movieDetail.youtubeId = action.payload.movieYoutubeId;
      state.movieReview = action.payload.movieReview;
      state.movieRelated = action.payload.movieRelated;
      state.isLoading = true;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
