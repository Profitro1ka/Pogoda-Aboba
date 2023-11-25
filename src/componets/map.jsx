import React, { useState, useEffect } from 'react';
import Styles from '../styles/index.module.css'

function Map({isMapOpen, lon, lat}) {
    const [map, setMap] = useState(null);

    useEffect(() => {

        if (isMapOpen && !map) {
            const init = () => {
                const myMap = new window.ymaps.Map("map", {
                    center: [lon, lat], // координаты центра карты
                    zoom: 10 // уровень масштабирования
                });
                setMap(myMap);
            };
            console.log("dasdasd")
            window.ymaps.ready(init);
        }
    }, [isMapOpen, map]);


    return (
        <div>
            {isMapOpen && <div id={"map"} className={Styles.map} />}
        </div>
    );
}

export default Map;