import movieApi from "../../api/movieApi";
import { movieActions } from "../reducer/movieReducer";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch(movieActions.setLoading());
      const getPopularMovies = movieApi.get(
        `/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const getTopRatedMovies = movieApi.get(
        `/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const getUpComingMovies = movieApi.get(
        `/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const [popularMovies, topRatedMovies, upComingMovies] = await Promise.all(
        [getPopularMovies, getTopRatedMovies, getUpComingMovies]
      );

      dispatch(
        movieActions.getAllMovies({
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
        })
      );
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };
}

function getMovieDetail(movieId) {
  return async (dispatch) => {
    try {
      dispatch(movieActions.setLoading());
      const getMovieDetail = movieApi.get(
        `/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      const getMovieYoutubeId = movieApi.get(
        `/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      );
      const getMovieReview = movieApi.get(
        `/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
      );
      const getMovieReletedMovies = movieApi.get(
        `/${movieId}/recommendations?api_key=${API_KEY}&language=en-US`
      );
      const [movieDetail, movieYoutubeId, movieReview, movieRelated] =
        await Promise.all([
          getMovieDetail,
          getMovieYoutubeId,
          getMovieReview,
          getMovieReletedMovies,
        ]);

      dispatch(
        movieActions.getMovieDetail({
          movieDetail: movieDetail.data,
          movieYoutubeId: movieYoutubeId.data.results[0].key,
          movieReview: movieReview.data,
          movieRelated: movieRelated.data,
        })
      );
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };
}

function setKeyword(keyword) {
  return (dispatch) => {
    dispatch(movieActions.setKeyword(keyword));
  };
}

export const getMovieActions = { getMovies, getMovieDetail, setKeyword };
