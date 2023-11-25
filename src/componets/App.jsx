import React, {useState} from "react";
import Styles from '../styles/index.module.css'
import Form from "./form";
import plus from "../images/Proto-semiticT-01.svg.svg";

function App() {
    const [widgets, setWidgets] = useState([<Form />])

    const addForm = () => {
        setWidgets([...widgets, <Form />])
    }

    return (
        <div>
            <h1>Pogoda-Aboba</h1>
            <div className={Styles.main}>
                {widgets.map((el) => el)}
                <button onClick={addForm}><img className={Styles.plus} src={plus} alt="плюсик)"/></button>
            </div>
        </div>
    );
}

export default App;
