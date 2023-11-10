import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const { popularMovies, topRatedMovies, upComingMovies, keyword } =
    useSelector((state) => state.movie);

  const [filterMovie, setFilterMovie] = useState([]);
  const handleChange = (e) => {
    /* const { value } = e.target;
    filterMovie.map((movie) => {
      console.log(movie);
      // const test = movie.sort((a, b) => a - b);
      console.log(test);
    }); */
  };

  // console.log(filterMovie);

  console.log(keyword);

  /* useEffect(() => {
    setFilterMovie(popularMovies.results.map(movie => {
      movie.
    }));
  }, []); */

  return (
    <div className="bg-black text-white">
      <div className="flex gap-10 max-w-5xl mx-auto">
        <div className="basis-2/5">
          <div className="border rounded-lg">
            <div className="p-3 border-b">
              <h3 className="text-xl">Sort</h3>
            </div>
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="text-lg text-center">Sort Results By</h3>
              <select
                name="sort"
                id=""
                className="text-black p-1 px-3 outline-none bg-transparent"
                onChange={handleChange}
              >
                <option value="pop_desc">Popularity(Desc)</option>
                <option value="pop_asc">Popularity(Asc)</option>
                <option value="">Release Day(Desc)</option>
                <option value="">Release Day(Asc)</option>
                <option value="">Vote(Desc)</option>
                <option value="">Vote(Asc)</option>
                <option value="">Revenue(Desc)</option>
                <option value="">Revenue(Asc)</option>
              </select>
            </div>
          </div>
          <div className="border rounded-lg mt-5">
            <div className="p-3 border-b">
              <h3 className="text-xl">Filter</h3>
            </div>
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="text-lg text-center">YEAY Filter</h3>
            </div>
            <div className="p-3 border-t">
              <h3 className="text-xl text-center">Filter</h3>
            </div>
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="text-lg text-center">IBM Score Filter</h3>
            </div>
            <div className="p-3 border-t">
              <h3 className="text-xl text-center">Genre</h3>
            </div>
            <div className="flex flex-col items-center gap-5 p-5">
              <h3 className="text-lg text-center">IBM Score Filter</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 basis-3/5">
          {popularMovies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
