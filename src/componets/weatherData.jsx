import React from 'react';
import Styles from "../styles/index.module.css";

const WeatherData = ({res}) => {
    return (
        <div className={Styles.weatherData}>
            <div>
                <p>Температура: {res.current?.temp_c}C°</p>

                <p>C ощущается как: {res.current?.feelslike_c}C°</p>
                <p>Ветер:</p>
                <ul>
                    <li>направление: {res.current?.wind_dir}</li>
                    <li>Скорость: {res.current?.wind_kph}км/ч</li>
                </ul>
                <p>Страна: {res.location?.country}</p>
                <p> Регион: {res.location?.region}</p>
            </div>

            <img className={Styles.state} src={res.current?.condition?.icon} alt="состояние"/>

        </div>
    );
};

export default WeatherData;