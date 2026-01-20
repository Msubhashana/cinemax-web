import Image from "next/image";
import Link from "next/link";

// We define what data this component needs to work(Props)

interface MovieProps {
    movie: {
        id: number;
        title: string;
        year: number;
        rating: number;
        posterURL : string;
    };
}

export default function MovieCard({ movie }: MovieProps) {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer bg-white">
                <div className="relative h-64 w-full mb-4">
                    <Image
                        src={movie.posterURL}
                        alt={movie.title}
                        fill
                        className="object-cover rounded"
                    />
                </div>
                <h2 className="text-xl font-semibold text-black">
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
    );
}