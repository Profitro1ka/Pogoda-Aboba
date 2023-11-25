import React from 'react';
import Styles from "../styles/index.module.css";

const Input = ({setLat,setLon,dataIsCorrect}) => {
    return (
        <div className={Styles.inputs}>
            <input className={Styles.input} onChange={event => setLat(event.target.value)} placeholder="Введите широту"/>
            <input className={Styles.input} onChange={event => setLon(event.target.value)} placeholder="Введите долготу"/>
            {!dataIsCorrect&&<p className={Styles.error}>Данные не корректны</p>}
        </div>
    );
};

export default Input;