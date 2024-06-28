import React from 'react';

import "./style.scss";
import OrangeButton from "../../shared/buttons/Orange_Button/OrangeButton.jsx";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

function Suit() {
    return (
        <div className="suit_box">
            <div id="left">
                <h1>
                    <b>Кому подойдёт</b>
                    <br/>
                    партнёрская программа
                    <br/>
                    FIX-ремонт?
                </h1>
                <div id="choice_container">
                    <p>Кто вы:</p>
                    <div id="choice_content">
                        <button className="single_choice">ФИЗ.ЛИЦО</button>
                        <button className="single_choice">РИЕЛТОР</button>
                        <button className="single_choice">ЗАСТРОЙЩИК</button>
                    </div>
                </div>
            </div>
            <div id="right">
                <h2>Риелторам:</h2>
                <ul>
                    <li>Дополнительный заработок (от 50 т.р) за сделку</li>
                    <li>Кратно повысите свой уровень сервиса</li>
                    <li>Увеличите количество сделок за счёт дополнительных услуг по ремонту и строительству</li>
                    <li>Повысите лояльность благодаря спец. предложениям</li>
                </ul>
                <div id="button_boxes">
                    <div id="button_wrapper1">
                        <OrangeButton text="Присоединиться к программе"/>
                    </div>
                    <div id="button_wrapper2">
                        <CheckButton text="Подробнее"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suit;