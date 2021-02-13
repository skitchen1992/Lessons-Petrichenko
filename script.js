"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
//Первый вариант цикла
/* for( let i = 0; i < 2; i++ ){
    const lastFilm = prompt("Один из последних просмотренных фильмов", ""),
        appraisal  = prompt("На сколько оцените его?", "");

    if(lastFilm != null && appraisal != null && lastFilm != '' && appraisal != ''  && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = appraisal;
        console.log('done');
    }else{
        console.log('err');
        i--;
    }
} */
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
let z = 0;
do{
    const lastFilm = prompt("Один из последних просмотренных фильмов", ""),
    appraisal  = prompt("На сколько оцените его?", "");
    z++;
    if(lastFilm != null && appraisal != null && lastFilm != '' && appraisal != ''  && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = appraisal;
        console.log('done');
    }else{
        console.log('err');
        z--;
    }
}while(z < 2);

if(personalMovieDB.count < 10){
    console.log('Просмотрено мало фильмов');
}else if(personalMovieDB.count  >= 10 && personalMovieDB.count < 30){
    console.log('Вы класический зритель');   
}else if(personalMovieDB.count > 30){
    console.log('Вы киноман');
}else{
    console.log('Произошла ошибка'); 
}







//personalMovieDB.movies[lastFilm2] = appraisal2;

console.log(personalMovieDB);

