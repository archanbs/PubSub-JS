import { PubSub } from "./pubsub.js";

export const Actors = {
    actorsList: [],
    actorAdded: (actorName) => {
        Actors.actorsList.push(actorName);
        console.log('Actor added : ', actorName);

        const actorList = document.getElementById('actors-list');
        const li = document.createElement('li');
        li.innerHTML = actorName;
        li.setAttribute('key', Actors.actorsList.length-1);
        li.setAttribute('id', `actorList-${Actors.actorsList.length-1}`);
        li.addEventListener('click', ev => {
            ev.preventDefault();
            Actors.actorRemoved(actorName)
        })
        actorList.appendChild(li);
        
        PubSub.publish('actorAdded');
    },
    actorRemoved: (actorName) => {
        const index = Actors.actorsList.indexOf(actorName);
        console.log(actorName , ' found at ', index);

        const ul = document.getElementById('actors-list');
        const listItem = document.getElementById(`actorList-${index}`);
        ul.removeChild(listItem);

        console.log('Actor removed : ', actorName);
        Actors.actorsList.filter(al => al !== actorName);
        PubSub.publish('actorRemoved');
    }
}