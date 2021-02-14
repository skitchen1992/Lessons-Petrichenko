"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
};

 
//Первый вариант цикла


function rememberMyFilms(){
    for( let i = 0; i < 2; i++ ){
        const lastFilm = prompt("Один из последних просмотренных фильмов", ""),
            appraisal  = prompt("На сколько оцените его?", "");
    
        if(lastFilm != null && appraisal != null && lastFilm != '' && appraisal != ''  && lastFilm.length < 50){
            personalMovieDB.movies[lastFilm] = appraisal;
            console.log('done');
        }else{
            console.log('err');
            i--;
        }
    } 
}
rememberMyFilms();
//Второй вариант цикла
/* let j = 0;
while(j < 2){
    const lastFilm = prompt("Один из последних просмотренных фильмов", ""),
    appraisal  = prompt("На сколько оцените его?", "");
    j++;
    if(lastFilm != null && appraisal != null && lastFilm != '' && appraisal != ''  && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = appraisal;
        console.log('done');
    }else{
        console.log('err');
        j--;
    }
} */
//Третий вариант цикла
/* let z = 0;
do {
    const lastFilm = prompt("Один из последних просмотренных фильмов", ""),
        appraisal = prompt("На сколько оцените его?", "");
    z++;
    if (lastFilm != null && appraisal != null && lastFilm != '' && appraisal != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = appraisal;
        console.log('done');
    } else {
        console.log('err');
        z--;
    }
} while (z < 2); */
function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы клаcический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if( !hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private );

function writeYourGenres(){
    for( let i = 1; i < 4; i++ ){
        personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();








/* let dfg = 'string';

console.log(dfg[2]);
let dfr = dfg.toUpperCase();
console.log(dfr);
console.log(dfr.toLowerCase());

const fruit = 'Some fruite';
console.log(fruit.indexOf('fruite'));

const lodd = "Hello world";
console.log(lodd.slice(-4,-1));

const test = '12.34px';
console.log(parseInt(test));
console.log(parseFloat(test)); */