import {
    Show
} from "../entities/Show";
import {
    Season
} from "../entities/Season";
import {
    Actor
} from "../entities/Actor";
import {
    httpService
} from "./httpService";
import {
    ALL_SHOWS_URL
} from "../shared/endpoints";

class ShowServices {

    getAllShows() {
        return httpService.getData(ALL_SHOWS_URL)
            .then(listOfAllShows => {
                return listOfAllShows.map(({
                    name,
                    id,
                    image,
                    summary,
                    rating
                }) => {
                    const description = summary.replace(/<[^>]+>/g, '');
                    return new Show(name, id, image.original, description, rating);
                })
            })
    }

    filterTop50Shows(listOfAllShows) {
        return listOfAllShows.sort((a, b) => {
                a = a.rating.average;
                b = b.rating.average;
                return b - a;
            })
            .slice(0, 50)
    }

    getTop50() {
        const localData = localStorage.getItem("topShows");
        if (localData) {
            return new Promise((resolve) => {
                resolve(JSON.parse(localData));
            })
        }

        return this.getAllShows()
            .then(listOfAllShows => {
                const listOf50 = this.filterTop50Shows(listOfAllShows);
                localStorage.setItem("topShows", JSON.stringify(listOf50));
                return listOf50
            })
    }

    getSeasonsAndCast(id) {
        return httpService.getData(`${ALL_SHOWS_URL}/${id}?embed[]=seasons&embed[]=cast`)
            .then(({
                name,
                id,
                image,
                summary,
                rating,
                _embedded
            }) => {
                const description = summary.replace(/<[^>]+>/g, '');
                return {
                    listOfActors: _embedded.cast.map(item => new Actor(item.person.name)),
                    listOfSeasons: _embedded.seasons.map(item => (
                        new Season(item.premiereDate, item.endDate, item.length))),
                    clickedShow: new Show(name, id, image.original, description, rating.average)
                }
            })

    }


}


export const showServices = new ShowServices();