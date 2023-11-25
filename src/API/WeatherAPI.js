export class WeatherAPI {
    static async sendPosition(lon, lat, setIsGetAnswer) {
        const apiKey = "63c67aa825674eb8b46170836232411";
        const http = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lon},${lat}&lang=ru`;

        return  await fetch(http)
            .then(resp => resp.json().then(setIsGetAnswer(true)))
    }
}

