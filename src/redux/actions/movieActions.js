import movieApi from "../../api/movieApi";
import { movieActions } from "../reducer/movieReducer";

function getMovies() {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  return async (dispatch) => {
    try {
      dispatch(movieActions.setLoading());
      const getPopularMovies = movieApi.get(
        `/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const getTopRatedMovies = movieApi.get(
        `/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const getUpComingMovies = movieApi.get(
        `/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
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
      console.log(e);
      throw new Error(`${e.message}`);
    }
  };
}

export const getMovieActions = { getMovies };
