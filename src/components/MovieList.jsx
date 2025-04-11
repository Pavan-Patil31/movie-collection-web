import React from "react";
import movies from "../data";

const MovieList = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Movie List</h1>
      <div className="w-full max-w-2xl">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-4"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-600">Rating: {"⭐".repeat(movie.rating)}</p>
            <p className="mt-2 text-gray-700">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
