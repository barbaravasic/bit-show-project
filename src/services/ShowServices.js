import { shows } from "../shared/endpoints";
import { Show } from "../entities/Show";
import { Season } from "../entities/Season";
import { Actor } from "../entities/Actor";

class ShowServices {

    getTop50() {
        const localData = localStorage.getItem("topShows");
        if (localData) {
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(localData));
            })
        }
        return fetch(shows)
            .then(response => {

                return response.json();
            })
            .then(myResponse => {
                const listOfAllShows = [];
                myResponse.map(show => {
                    const description = show.summary.replace(/<[^>]+>/g, '');
                    const createdShow = new Show(show.name, show.id, show.image.original, description, show.rating);
                    listOfAllShows.push(createdShow);
                })
                listOfAllShows.sort((a, b) => {
                    a = a.rating.average;
                    b = b.rating.average;
                    return b - a;
                })
                const top50Shows = listOfAllShows.slice(0, 50);
                localStorage.setItem("topShows", JSON.stringify(top50Shows))
                return top50Shows;
            })
    }

    getSeasonsAndCast(id) {
        return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(response => {
                return response.json();
            })
            .then(myResponse => {
                const listOfActors = [];
                const listOfSeasons = [];
                const seasonsArray = myResponse._embedded.seasons;
                const castArray = myResponse._embedded.cast;
                seasonsArray.map(item => {
                    const createdSeason = new Season(item.premiereDate, item.endDate, item.length);
                    listOfSeasons.push(createdSeason);
                })
                castArray.map(item => {
                    const createdActor = new Actor(item.person.name);
                    listOfActors.push(createdActor);
                })
                const description = myResponse.summary.replace(/<[^>]+>/g, '');
                const clickedShow = new Show(myResponse.name, myResponse.id, myResponse.image.original, description, myResponse.rating.average);
                return {
                    listOfActors,
                    listOfSeasons,
                    clickedShow
                }
            })

    }

    getAllShows() {
        return fetch(shows)
            .then(response => {
                return response.json()
            })
            .then(myResponse => {
                const listOfAllShows = [];
                myResponse.map(show => {
                    const description = show.summary.replace(/<[^>]+>/g, '');
                    const createdShow = new Show(show.name, show.id, show.image.original, description, show.rating);
                    listOfAllShows.push(createdShow);
                })
                return listOfAllShows;
            })
    }
}


export const showServices = new ShowServices();