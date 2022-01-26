"use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?", '');
// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: '',
//     actors: '',
//     genres: '',
//     privat: false
// };

// const pit = [];

// pit[0] = prompt('Один из последних просметренных фильмов?', '');
// pit[1] = prompt('На сколько оцените его?', '');

// personalMovieDB.movies = 'pit[0]:pit[1]';

// * моя работа*

// console.log(personalMovieDB['movies']);

// -----------------------------------

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просметренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просметренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
