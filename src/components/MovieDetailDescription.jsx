import React, { useState } from "react";
import MovieDetailContentBadge from "./MovieDetailContentBadge";
import YoutubeModal from "./YoutubeModal";
import { BiMoviePlay } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdGrade } from "react-icons/md";

export default function MovieDetailDescription({ movie }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex text-white gap-20 mb-32">
      <div className="basis-3/6">
        <img
          className="w-full"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 basis-3/6">
        <ul className="flex gap-3">
          {movie.genres?.map((genre) => (
            <li
              key={genre.id}
              className="bg-red-600 rounded-full text-sm px-3 py-1"
            >
              {genre.name}
            </li>
          ))}
        </ul>
        <h1 className="text-7xl font-bold">{movie.title}</h1>
        <p>{movie.tagline}</p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-1">
            <MdGrade className="text-yellow-400 text-xl" />
            {movie.vote_average}
          </li>
          <li className="flex items-center gap-1">
            <BsFillPeopleFill className="text-xl" />
            {movie.popularity}
          </li>
          <li className="text-red-600 font-bold italic text-lg">
            {!movie.adult ? "Under 18" : ""}
          </li>
        </ul>
        <p className="py-5 border-y border-white">{movie.overview}</p>

        <ul className="flex flex-col gap-4">
          <MovieDetailContentBadge text="Budget" value={movie.budget} />
          <MovieDetailContentBadge text="Revenue" value={movie.revenue} />
          <MovieDetailContentBadge
            text="Release Day"
            value={movie.release_date}
          />
          <MovieDetailContentBadge text="Time" value={movie.runtime} />
        </ul>
        <div className="border-t border-white p-3">
          <button
            className="flex items-center gap-1 text-red-500 font-bold"
            onClick={() => setModalOpen(true)}
          >
            <BiMoviePlay />
            <span>Watch Tralier</span>
          </button>
        </div>
        <YoutubeModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
}
