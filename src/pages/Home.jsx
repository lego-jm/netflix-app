import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieActions } from "../redux/actions/movieActions";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { PuffLoader } from "react-spinners";

export default function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, isLoading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieActions.getMovies());
  }, []);

  if (!isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <PuffLoader size={300} color="#E50914" />
      </div>
    );
  }

  return (
    <div className="">
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <div className="flex flex-col gap-14 p-16 bg-black text-white">
        <div>
          <h3 className="text-2xl font-bold">Popular Movies</h3>
          <MovieSlide movies={popularMovies} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Top Rated Movies</h3>
          <MovieSlide movies={topRatedMovies} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Upcoming Movies</h3>
          <MovieSlide movies={upComingMovies} />
        </div>
      </div>
    </div>
  );
}
