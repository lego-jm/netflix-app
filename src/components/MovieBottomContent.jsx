import React, { useState } from "react";
import MovieReview from "./MovieReview";
import MovieRelatedMovies from "./MovieRelatedMovies";
import { useSelector } from "react-redux";

export default function MovieBottomContent() {
  const [isReview, setIsReview] = useState(true);
  const { movieReview, movieRelated } = useSelector((state) => state.movie);

  return (
    <div className="w-full">
      <div className="flex gap-5 text-gray-500 mb-3 w-5/12">
        <button
          onClick={() => setIsReview(true)}
          className="bg-white basis-2/5 p-4"
        >
          REVIEWS{` (${movieReview.results?.length})`}
        </button>
        <button
          onClick={() => setIsReview(false)}
          className="bg-white basis-3/5 p-4"
        >
          RELATED MOVIES{` (${movieRelated.results?.length})`}
        </button>
      </div>
      {isReview ? (
        <MovieReview reviews={movieReview} />
      ) : (
        <MovieRelatedMovies movies={movieRelated} />
      )}
    </div>
  );
}
