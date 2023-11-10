import React from "react";
import { Link } from "react-router-dom";

export default function MovieDetailBanner({ title }) {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center before:absolute before:bg-black before:opacity-60 before:w-full before:h-full"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-5xl font-bold text-center mb-5">NETFLIX</h1>
        <div className="w-full flex items-center gap-3 bg-white  p-3 px-5 rounded-lg">
          <Link
            to="/"
            className="text-gray-500 hover:font-bold hover:text-gray-700 transition-all"
          >
            HOME
          </Link>
          <h3 className="border-l border-gray-500 pl-3 text-gray-400">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
