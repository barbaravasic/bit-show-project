export class Season {
    constructor(startDate, endDate, numOfSeasons) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.numOfSeasons = numOfSeasons;
    }
    getStartDateEndDate() {
        return `${this.startDate} - ${this.endDate}`;
    }
}