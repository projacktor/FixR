import React from 'react';

import "./style.scss";
import BlackButton from "../../shared/buttons/Consulting Black Btn/BlackButton.jsx";

function Predict() {
    return (
        <div className="predict">
            <div id="top">
                <div id="text">
                    <h1><b>Спрогнозируйте свой доход</b> прямо сейчас</h1>
                    <p>В расчёт возьмём средние данные по пакетам</p>
                </div>
                <div id="money">
                    <h1>Итого: <span>382 000</span> руб</h1>
                    <p>*расчёт ориентировочный и не несёт в себе никаких гарантий</p>
                </div>
            </div>
            <div id="down">
                <div id="field">
                    <p>Количество клиентов на ремонт</p>
                    <input name="clients" type="number" placeholder="Например, 10" autoComplete=""/>
                </div>
                <div id="field">
                    <p>Количество клиентов на строительство</p>
                    <input name="clients" type="number" placeholder="Например, 8" autoComplete=""/>
                </div>
                <div id="button_container">
                    <BlackButton text="Рассчитать доход"/>
                </div>
            </div>
        </div>
    );
}

export default Predict;