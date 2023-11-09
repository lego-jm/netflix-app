import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
  movie: { backdrop_path, title, vote_average, popularity, id, genre_ids },
}) {
  const navigate = useNavigate();

  // https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}
  return (
    <div
      className="cursor-pointer group transition-all bg-center bg-cover z-50 hover:scale-150"
      style={{
        backgroundImage: `URL('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}')`,
      }}
      onClick={() => navigate(`/movies/${id}`)}
    >
      {/* <img
        className=""
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`}
        alt=""
      /> */}
      <div
        className={`opacity-0 group-hover:opacity-80 bg-black w-full h-full  `}
      >
        <h3>{title}</h3>
        <ul>
          category
          <li></li>
        </ul>
        <ul>
          <li>{vote_average}</li>
          <li>{popularity}</li>
          <li>청소년 관람</li>
        </ul>
      </div>
    </div>
  );
}
