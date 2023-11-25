import React, { useState, useEffect } from 'react';
import Styles from '../styles/index.module.css'
import {MapAPI} from "../API/MapAPI";

function Map({isMapOpen, lon, lat}) {
    const [map, setMap] = useState(null);

    useEffect( () => {
         MapAPI.initializeMap(isMapOpen, map, setMap, lon, lat)
    }, [isMapOpen, map]);

    return (
        <ymaps>
            {isMapOpen && <div id={"map"} className={Styles.map} />}
        </ymaps>
    );
}

export default Map;