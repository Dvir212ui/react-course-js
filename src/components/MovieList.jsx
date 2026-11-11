import MovieCard from "./MovieCard.jsx";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>
      <MovieCard
        title="Inception"
        year={2010}
        rating={8.8}
        available={true}
        popular={true}
        genre="Sci-Fi"
        duration={148}
      />
      <MovieCard
        title="Toy Story"
        year={1995}
        rating={8.3}
        available={false}
        popular={false}
        genre="Animation"
        duration={81}
      />
      <MovieCard
        title="Parasite"
        year={2019}
        rating={8.5}
        available={true}
        popular={false}
        genre="Thriller"
        duration={132}
      />
    </section>
  );
}

export default MovieList;