import { loadData } from "./load.js";

const data = loadData();

console.log(data.updatedAt);
console.log(data.movies[0].title);
console.log(data.movies[0].director.name);

console.log(data.movies[2].cast[2].name);
console.log(data.movies[0].reviews[1].author.username);//tom99

const last = data.movies[data.movies.length - 1];//the last movie
console.log(last.title);

const field = "year";
console.log(data.movies[3][field]);//2019

const toyStory = data.movies[4];
console.log(toyStory.awards?.oscars ?? 0);
console.log(toyStory.reviews[0]?.text ?? "No reviews yet");