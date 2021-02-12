"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");

let lastFilm1 = prompt("Один из последних просмотренных фильмов", "");
let appraisal1  = prompt("На сколько оцените его?", "");
let lastFilm2 = prompt("Один из последних просмотренных фильмов", "");
let appraisal2 = prompt("На сколько оцените его?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastFilm1] = appraisal1;
personalMovieDB.movies[lastFilm2] = appraisal2;

console.log(personalMovieDB);