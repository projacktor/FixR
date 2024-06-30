import React from 'react';

import "./style.scss";

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
                
            </div>
        </div>
    );
}

export default Predict;