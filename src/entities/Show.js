export class Show {
    constructor(name, id, posterUrl, description, rating) {
        this.name = name;
        this.id = id;
        this.posterUrl = posterUrl;
        this.description = description;
        this.rating = rating;
    }

    getShowName() {
        return `${this.name}`;
    }
}