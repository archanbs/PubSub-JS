import { PubSub } from "./pubsub.js";
import {ACTOR_ADDED, ACTOR_REMOVED, MOVIE_ADDED, MOVIE_REMOVED} from './constants.js';
import { Actors } from './actors.js';
import { Movies } from "./movies.js";

export const MetaData = {
    addSubscriptions: () => {
        PubSub.subscribe(ACTOR_ADDED, MetaData.actorsUpdated);
        PubSub.subscribe(ACTOR_REMOVED, MetaData.actorsUpdated);
        PubSub.subscribe(MOVIE_ADDED, MetaData.moviesUpdated);
        PubSub.subscribe(MOVIE_REMOVED, MetaData.moviesUpdated);
    },
    actorsUpdated: () => {
        const spanEle = document.querySelector('#actors-summary');
        console.log(spanEle);
        spanEle.innerHTML = Actors.actorsList.length;
    },
    moviesUpdated: () => {
        const spanEle = document.querySelector('#movies-summary');
        console.log(spanEle);
        spanEle.innerHTML = Movies.movieList.length;
    }
}