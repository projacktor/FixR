import React from 'react';

import "./style.scss";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";
import ReasonBlock from "../../shared/Reason block/ReasonBlock.jsx";

function ReasonsList() {
    return (
        <div className="reasons_list">
            <div id="left">
                <div id="content_wrapper">
                    <h1>
                        <b>Избавим вас от
                            <br/>
                            типичных проблем</b>
                        <br/>
                        ремонта квартиры:
                    </h1>
                    <CheckButton text="Рассчитать стоимость без посещения оффиса"/>
                </div>
            </div>

            <div id="right">
                <ReasonBlock text1="Долгий выбор материала"
                             text2="и подсчёты бюджета"
                             description="ссоры и траты времени на переподбор, когда желание не сходится с бюджетом"/>

                <ReasonBlock text1="Бесконечный поиск"
                             text2="хороших исполнителей"
                             description="снова траты времени на поиск, выбор и общение без понимания средних цен"/>

                <ReasonBlock text1="Организация"
                             text2="всех работ"
                             description="попытки выстроить очередность процессов без должного опыта"/>

                <ReasonBlock text1="Постоянный"
                             text2="контроль"
                             description="приходится отвлекаться от дел, бросать всё и ехать на объект без понимания, что проверять"/>


                <ReasonBlock text1="Разборки, кто прав,"
                             text2="а кто виноват"
                             description="нервная система одна, а виноватых  всё равно не найти"/>

                <ReasonBlock text1="Регулярный закуп"
                             text2="и доставка материалов"
                             description="вместо отдыха после работы - похождения по строительным магазинами и поездки на объект"/>

                <ReasonBlock text1={<b>И в результате</b>}
                             text2=""
                             description="несмотря на все старания и страдания, сроки и стоимость ремонта увеличиваются в 2-3 раза"/>
            </div>
        </div>
    );
}

export default ReasonsList;