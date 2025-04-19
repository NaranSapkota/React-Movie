function MovieCard({ movie }) {
  function OnFavoriteClick() {
    alert("Added to favorites");
  }

  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={OnFavoriteClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
              <h3>{ movie.title}</h3>
              <p>{ movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
