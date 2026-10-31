export const getDirectorLine = movie => `Director:${movie.director.name}`;//added .name to the path

export const getShortMovies = movies =>
  movies.filter(movie => movie.duration < 100);//deleted the {} here, could also return with {}

export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title);//changed from movies.filter to movies.find

export const getOscarsLine = movie => `Oscars: ${movie.awards?.oscars ?? 0}`;//added ? to check for awards and ?? for default return value

export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);//added a copy to be sorted instead of the original array

export const markAsWatched = (movies, id) =>
  movies.map(movie => movie.id === id ? { ...movie, watched: true } : movie);//Returns a new array with an updated copy of the target movie without changing the original data

export const renameActor = (movie, index, newName) => ({
  ...movie,
  cast: movie.cast.map((actor, i) =>
    i === index ? { ...actor, name: newName } : actor
  )
}); //returns a new movie object by using map and ...movie to create a complete copy