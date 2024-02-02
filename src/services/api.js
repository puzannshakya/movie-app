import { AUTH_KEY } from "./../config/api-config";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: AUTH_KEY,
  },
};
export const getMovies = async (param) => {
  let movies = [];
  await fetch(
    `https://api.themoviedb.org/3/movie/${param}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      movies = response.results;
    })
    .catch((err) => console.error(err));

  return movies;
};
export const getMovieByID = async (id) => {
  let movies = {};

  await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      movies = response;
    })
    .catch((err) => console.error(err));

  return movies;
};

export const getTVByID = async (id) => {
  let movies = {};

  await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      movies = response;
    })
    .catch((err) => console.error(err));

  return movies;
};

export const getPersonByID = async (id) => {
  let movies = {};

  await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      movies = response;
    })
    .catch((err) => console.error(err));

  return movies;
};

export const getTVs = async (param) => {
  let TvShows = [];
  let pageNumber = 1;

  if (param != "top_rated") pageNumber = 3;

  await fetch(
    `https://api.themoviedb.org/3/tv/${param}?language=en-US&page=${pageNumber}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      TvShows = response.results;
    })
    .catch((err) => console.error(err));

  return TvShows;
};

export const searchResult = async (type, name) => {
  let media = [];

  await fetch(
    `https://api.themoviedb.org/3/search/${type}?query=${name}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      media = response.results;
    })
    .catch((err) => console.error(err));

  return media;
};
