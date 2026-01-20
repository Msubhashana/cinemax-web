"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; //Import Hooks
import { movies as allMovies } from "./data"; //Import data directly

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

  const [chatInput, setChatInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function askAI() {
    setIsLoading(true);
    setAiResponse(""); // Clear old message

    // Call our new Backend API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: chatInput })
    });

    const data = await response.json();
    setAiResponse(data.reply);
    setIsLoading(false)
  }

  return(
    <main className = "p-10">
      <div className = "flex justify-between items-center mb-6">
        <h1 className = "text-3xl font-bold">
          Cinemax Trending
        </h1>
      </div>

      {/* AI Chat Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
        <h2 className="text-xl font-bold mb-4 text-blue-900">
          🎬 Ask the AI Assistant
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="e.g. I want a sad movie..."
            className="flex-1 p-3 border rounded shadow-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <button
            onClick={askAI}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Thinking...": "Ask"}
          </button>
        </div>

        {/* the AI reply bubble */}
        {aiResponse && (
          <div className="mt-4 p-4 bg-white rounded border border-gray-200 text-gray-800">
            <strong>AI says:</strong> {aiResponse}
          </div>
        )}

      </div>

      {/*The search input */}
      <input
        type="text"
        placeholder="Search by title..."
        onChange = {(e) => handleSearch(e.target.value)}
        className="w-full p-3 mb-8 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer bg-white">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={movie.posterURL}
                  alt={movie.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h2 className="text-xl font-semibold">
                {movie.title}
              </h2>
              <p className="text-gray-600">
                Year: {movie.year}
              </p>
              <p className="text-gray-600">
                Rating: {movie.rating}
              </p>
            </div>
          </Link>
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