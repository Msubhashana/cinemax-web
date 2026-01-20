import Image from "next/image";
import Link from "next/link";
import { getMovieById } from "../../data";

// 1. This function receives "params" (the ID from the URL)
export default async function MovieDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

  const movie = await getMovieById(id);

  // 4. Handle errors (if user types a fake ID like /movie/99999)
  if (!movie) {
    return <div className="p-10">Movie not found!</div>;
  }

  return (
    <main className="min-h-screen p-10 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>

      {/* Movie Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/3 h-96">
          <Image 
            src={movie.posterURL} 
            alt={movie.title} 
            fill 
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Text Details */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-500 text-lg mb-6">ID: {movie.id}</p>
          
          {/* Fake "Overview" text because this simple API doesn't have descriptions */}
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            This is where the plot summary would go. Since we are using a simple test API, 
            we don't have real descriptions for "{movie.title}". 
            In a real app, you would display the full movie plot here!
          </p>
        </div>
      </div>
    </main>
  );
}