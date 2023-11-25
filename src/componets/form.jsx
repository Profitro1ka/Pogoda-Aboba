import React, {useState} from 'react';
import Styles from "../styles/index.module.css";
import {WeatherAPI} from "../API/WeatherAPI";
import WeatherData from "./weatherData";
import Map from "./map";

const Form = () => {
    const [lat, setLat] = useState("0")
    const [lon, setLon] = useState("0")
    const [res, setRes] = useState({})
    const [isGetAnswer, setIsGetAnswer] = useState(false)
    const [isMapOpen, setIsMapOpen] = useState(false)
    const [dataIsCorrect, setDataIsCorrect] = useState(true)

    const activeState = () => {
        setIsGetAnswer(true)
    }

    const dataIsValid = (lat, lon) => {
        const reg = new RegExp('^-?(([1-9]\\d*)|0)(.0*[1-9](0*[1-9])*)?$')
        return reg.test(lat) && reg.test(lon);
    }

    return (
        <div className={Styles.form}>
            <div className={Styles.closedForm}>
                <input onChange={event => setLat(event.target.value)} placeholder="Введите широту"/>
                <input onChange={event => setLon(event.target.value)} placeholder="Введите долготу"/>
                {!dataIsCorrect&&<p className={Styles.error}>Данные не корректны</p>}
                <button className={Styles.getRes} onClick={async () =>{
                    if(dataIsValid(lat, lon)){
                        setRes(await WeatherAPI.sendPosition(lat, lon, activeState))
                        setDataIsCorrect(true)
                    }
                    else {
                        setDataIsCorrect(false)
                    }
                }}>Получить результат
                </button>
                <button className={Styles.getRes} onClick={() => setIsMapOpen(true)}>Открыть карту</button>
                {isGetAnswer&&<WeatherData res={res}/>}
            </div>
            <Map isMapOpen={isMapOpen} lat={lat} lon={lon}/>
        </div>
    );
};

export default Form;