import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: { "Content-Type": "application/json" },
});

export default movieApi;
