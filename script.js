"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели", "");
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы клаcический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if( !hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (){
        for(let i = 1;i < 4; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === null || genre === ''){
                console.log(`Вы ввели не корректные данные`);
                i--;
            }else{
                personalMovieDB.genres[i-1] = genre;
            }  
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });

    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres(personalMovieDB.genres);









