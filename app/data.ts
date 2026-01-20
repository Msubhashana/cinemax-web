// app/data.ts
export const movies = [
  { 
    id: 1, 
    title: "Inception", 
    year: 2010, 
    rating: 8.8,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  { 
    id: 2, 
    title: "Interstellar", 
    year: 2014, 
    rating: 8.6,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  { 
    id: 3, 
    title: "The Dark Knight", 
    year: 2008, 
    rating: 9.0,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
  },
  { 
    id: 4, 
    title: "Avatar", 
    year: 2009, 
    rating: 7.8,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
  },
  { 
    id: 5, 
    title: "The Avengers", 
    year: 2012, 
    rating: 8.0,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
  },
  { 
    id: 6, 
    title: "Parasite", 
    year: 2019, 
    rating: 8.5,
    posterURL: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
  }
];

// This function simulates an API call (It waits 1 second then gives data)
export async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 100)); // Fake delay
  return movies;
}

export async function getMovieById(id: any) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return movies.find((movie) => movie.id == id);
}