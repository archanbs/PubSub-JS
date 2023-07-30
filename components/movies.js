import { PubSub } from "./pubsub.js";

export const Movies = {
    movieList: [],
    movieAdded: (movieName) => {
        Movies.movieList.push(movieName);
        console.log('Movie added : ', movieName);

        const movieList = document.getElementById('movies-list');
        const li = document.createElement('li');
        li.innerHTML = movieName;
        li.setAttribute('key', Movies.movieList.length-1);
        li.setAttribute('id', 'movieList-' + Movies.movieList.length-1);
        movieList.appendChild(li);

        PubSub.publish('movieAdded');
    },
    movieRemoved: (movieName) => {
        const index = Movies.movieList.find(movieName);
        console.log(movieName , ' found at ', index);

        const ul = document.getElementById('movies-list');
        const listItem = document.getElementById('movieList-'+index);
        ul.removeChild(listItem);

        console.log('Movie removed : ', movieName)
        Movies.movieList.filter(ml => ml !== movieName);
        PubSub.publish('movieRemoved')
    }
}