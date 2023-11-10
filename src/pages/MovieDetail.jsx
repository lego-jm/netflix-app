import React, { useEffect } from "react";
import MovieDetailBanner from "../components/MovieDetailBanner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieActions } from "../redux/actions/movieActions";
import { PuffLoader } from "react-spinners";
import MovieContent from "../components/MovieContent";

export default function MovieDetail() {
  const { isLoading, movieDetail } = useSelector((state) => state.movie);
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieActions.getMovieDetail(movieId));
  }, []);

  if (!isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <PuffLoader size={300} color="#E50914" />
      </div>
    );
  }

  return (
    <>
      <MovieDetailBanner title={movieDetail.title} />
      <div className="flex flex-col items-center bg-black pt-24 pb-36">
        <MovieContent movie={movieDetail} />
      </div>
    </>
  );
}
