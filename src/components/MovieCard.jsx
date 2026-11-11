function MovieCard({ title, year, rating, available, popular, genre, duration}) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      <p>ז׳אנר: {genre}</p>
      {duration && <p>אורך: {duration} דקות</p>}
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
    </article>
  );
}

export default MovieCard;