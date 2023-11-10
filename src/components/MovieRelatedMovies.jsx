import React from "react";
import MovieCard from "./MovieCard";

export default function MovieRelatedMovies({ movies }) {
  return (
    <div className="grid grid-cols-2 gap-5 p-10">
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
