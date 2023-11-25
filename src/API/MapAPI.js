export class MapAPI {
    static initializeMap(isMapOpen, map,setMap, lon, lat){
        if (isMapOpen && !map) {
            const init = () => {
                const myMap = new window.ymaps.Map("map", {
                    center: [lon, lat], // координаты центра карты
                    zoom: 10 // уровень масштабирования
                });
                setMap(myMap);
            };
            window.ymaps.ready(init);
        }
    }
}