import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1998" },
    { id: 3, title: "The Matrix", release_date: "2022" },
    { id: 4, title: "Spiderman 4", release_date: "2023" },
  ];

    const handleSearch = () => {
      

    };
    

  return (
    <div className="home">
      <form className="search-form" onsubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
        />
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
