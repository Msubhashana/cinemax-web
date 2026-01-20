"use client";

import { useState } from "react"; //Import Hooks
import { movies as allMovies } from "./data"; //Import data directly

//Import components
import AIChat from "./components/AIChat";
import MovieCard from "./components/MovieCard";

export default function Home() {
  // State to track the movies
  const [movies, setMovies] = useState(allMovies);

  // Function to filter movies
  const handleSearch = (term: string) => {
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filtered);
  };

  return(
    <main className = "p-10">
      <div className = "flex justify-between items-center mb-6">
        <h1 className = "text-3xl font-bold">
          Cinemax Trending
        </h1>
      </div>

      {/* 1. Use the AI Component */}
      <AIChat />

      {/*The search input */}
      <input
        type="text"
        placeholder="Search by title..."
        onChange = {(e) => handleSearch(e.target.value)}
        className="w-full p-3 mb-8 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />

      {/* 2. Use the MovieCard Component */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />   
        ))}
      </div>

      {/*Empty state message */}
      {movies.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No movies found
        </p>
      )}

    </main>
  );

}