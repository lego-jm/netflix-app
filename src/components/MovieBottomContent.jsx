import React, { useState } from "react";
import MovieReview from "./MovieReview";
import MovieRelatedMovies from "./MovieRelatedMovies";

export default function MovieBottomContent() {
  const [isReview, setIsReview] = useState(false);

  return (
    <div className="w-full">
      <div className="flex gap-5 text-gray-500">
        <button
          onClick={() => setIsReview(true)}
          className="bg-white w-2/12 p-4"
        >
          REVIEWS
        </button>
        <button
          onClick={() => setIsReview(false)}
          className="bg-white w-2/12 p-4"
        >
          RELATED MOVIES
        </button>
      </div>
      {isReview ? <MovieReview /> : <MovieRelatedMovies />}
    </div>
  );
}
