import React from "react";

export default function Banner({ movie }) {
  const { backdrop_path, title, overview } = movie;
  return (
    <div
      className="relative w-full flex items-center bg-cover bg-center  text-white before:absolute before:bg-gradient-to-r before:from-black before:w-full before:h-full"
      style={{
        height: "800px",
        backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}')`,
      }}
    >
      <div className="w-3/6 pl-10 z-10">
        <h1 className="text-5xl mb-5 font-bold">{title}</h1>
        <p className="text-lg">{overview}</p>
      </div>
    </div>
  );
}
