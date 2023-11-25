import React, {useState} from 'react';
import Styles from "../styles/index.module.css";
import {WeatherAPI} from "../API/WeatherAPI";
import WeatherData from "./weatherData";
import Map from "./map";
import Input from "./Input";
import {RegexWorker} from "../utils/RegexWorker";

const Form = () => {
    const [lat, setLat] = useState("0")
    const [lon, setLon] = useState("0")
    const [res, setRes] = useState({})
    const [isGetAnswer, setIsGetAnswer] = useState(false)
    const [isMapOpen, setIsMapOpen] = useState(false)
    const [dataIsCorrect, setDataIsCorrect] = useState(true)

    let mapId=0;

    return (
        <div className={Styles.form}>
            <div className={Styles.closedForm}>
                <Input dataIsCorrect={dataIsCorrect} setLat={setLat} setLon={setLon}/>
                <button
                    className={Styles.getRes} onClick={async () => {
                    if (RegexWorker.dataIsValid(lat, lon, setDataIsCorrect)) {
                        setRes(await WeatherAPI.sendPosition(lat, lon, setIsGetAnswer))
                    }
                }}>Получить результат
                </button>
                <button
                    className={Styles.getRes} onClick={() => setIsMapOpen(true)}>
                    Открыть карту
                </button>

                {isGetAnswer && <WeatherData res={res}/>}
            </div>

            <Map isMapOpen={isMapOpen} lat={lat} lon={lon}/>
        </div>
    );
};

export default Form;