import React from 'react';

import "./style.scss";

function Planner({planner_img}) {
    return (
        <div className="planner">
            <div id="planner_right">
                <div className="planner_textbox">
                    <h2>Всего <b>4 шага и 1.5 часа</b> <br/> личного времени </h2>
                    <p>отделяют вас от дома своей мечты</p>
                </div>
                <div className="planner_steps">
                    <div className="planner_single_step" id="planner_step1">
                        <p className="planner_steps_t1">Выбор опции</p>
                        <p className="planner_steps_t2">1 мин</p>
                    </div>
                    <div className="planner_single_step" id="planner_step2">
                        <p className="planner_steps_t1">Выбор подходящего тарифа</p>
                        <p className="planner_steps_t2">30 мин</p>
                    </div>
                    <div className="planner_single_step" id="planner_step3">
                        <p className="planner_steps_t1">Удобный выбор
                            планировки и материала</p>
                        <p className="planner_steps_t2">60 мин</p>
                    </div>
                    <div className="planner_single_step" id="planner_step4">
                        <p className="planner_steps_t1">Проведение работ сервисом FIX-ремонт</p>
                    </div>
                    <div className="planner_single_step" id="planner_step5">
                        <p className="planner_steps_t1">Получите — распишитесь!:)</p>
                    </div>
                </div>
            </div>
            <div id="planner_left">
                <img src={planner_img} alt="FIX-remont_planner"/>
                <p>Выбирайте подходящий тариф под ваш бюджет.
                    Цена фиксированная!</p>
            </div>
        </div>
    );
}

export default Planner;