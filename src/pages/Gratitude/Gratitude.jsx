import React from 'react';

import "./style.scss";
import BlackBtn from "../../components/helpers/Consulting Black Btn/BlackBtn.jsx";

function Gratitude() {
    return (
        <main className="thank_you">
            <div id="container">
                <h1>Благодарим
                    <br/>
                    за обращение!</h1>
                <h2>Ожидайте звонка с номера +375 (800)-00-00</h2>
                <BlackBtn text="Вернуться на сайт"/>
            </div>
        </main>
    );
}

export default Gratitude;