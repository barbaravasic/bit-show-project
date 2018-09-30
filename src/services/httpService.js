
class HttpService {

    getData(url) {
        return fetch(url)
            .then(response => response.json())
    }
}

export const httpService = new HttpService();