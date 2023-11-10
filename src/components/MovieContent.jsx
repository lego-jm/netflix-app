import React from "react";

import MovieBottomContent from "./MovieBottomContent";
import MovieDetailDescription from "./MovieDetailDescription";

export default function MovieContent({ movie }) {
  return (
    <div className="max-w-6xl">
      <MovieDetailDescription movie={movie} />
      <MovieBottomContent movie={movie} />
    </div>
  );
}
