
import { Actors, MetaData, Movies } from "./components";

document.addEventListener('DOMContentLoaded', () => {

    MetaData.addSubscriptions();

    const buttonAdded = document.getElementById('add-actor');
    buttonAdded.onclick = (ev) => {
        ev.preventDefault();
        const inputActor = document.getElementById('actor-name');
        if(inputActor.value !== "") {
            console.log('Adding actor');
            Actors.actorAdded(inputActor.value);
            document.getElementById('actor-name').value = "";
        }
    }

    const movieAdded = document.getElementById('add-movie');
    movieAdded.onclick = (ev) => {
        ev.preventDefault();
        const inputMovie = document.getElementById('movie-name');
        if(inputMovie.value !== "") {
            console.log("Adding movie");
            Movies.movieAdded(inputMovie.value);
            document.getElementById('movie-name').value = "";
        }
    }
});