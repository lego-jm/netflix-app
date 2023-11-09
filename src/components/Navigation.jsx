import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Navigation() {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center p-3 px-4 bg-bg-main-color text-white">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            className="w-32"
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt=""
          />
        </Link>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to=''>Home</Link> */}
        </nav>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          className="w-full px-3 py-1 outline-none text-black rounded-lg"
          type="text"
          value={keyword}
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="text-red-600 text-xl border border-red-600 p-2 rounded-md">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}
