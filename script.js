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

// const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просметренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просметренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// --------------------------- урок 2 ---------------------------------

// const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просметренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', ''); 
    
//     if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {  
//         personalMovieDB.movies[a] = b; 
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }     
//     // null - это отменено действие нажата кнопка Отмена, a != '' - это значит а не равно пустой строке  
// } 

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >=30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);

// -------------------------- вариант исполнения--------------------

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// let i = 0;
// do {
//     const a = prompt('Один из последних просметренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', ''); 
    
//     if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {  
//         personalMovieDB.movies[a] = b; 
//         console.log('Done');
//         i++;
//     } else {
//         console.log('Error');
//         i = 0;
//     }     
//     // null - это отменено действие нажата кнопка Отмена, a != '' - это значит а не равно пустой строке  
// }
// while (i < 2);


// ---------------------------------------------------------------------------------

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просметренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', ''); 
    
//     if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {  
//         personalMovieDB.movies[a] = b; 
//         console.log('Done');
//         i++;
//     } else {
//         console.log('Error');
//         i--;
//     }     
//     // null - это отменено действие нажата кнопка Отмена, a != '' - это значит а не равно пустой строке  
// } 

// --------------------------------------------------------------------------------

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просметренных фильмов?', ''),
          b = prompt('На сколько оцените его?', ''); 
    
    if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {  
        personalMovieDB.movies[a] = b; 
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }     
    // null - это отменено действие нажата кнопка Отмена, a != '' - это значит а не равно пустой строке  
} 

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);