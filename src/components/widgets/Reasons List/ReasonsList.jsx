import React from 'react';

import "./style.scss";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";
import ReasonBlock from "../../shared/Reason block/ReasonBlock.jsx";

function ReasonsList() {
    return (
        <div className="reasons_list">
            <div id="left">
                <h1>
                    <b>Избавим вас от
                        <br/>
                        типичных проблем</b>
                    <br/>
                    ремонта квартиры:
                </h1>
                <CheckButton text="Рассчитать стоимость без посещения оффиса"/>
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

                <ReasonBlock text1="Организация"
                             text2="всех работ"
                             description="попытки выстроить очередность процессов без должного опыта"/>

            </div>
        </div>
    );
}

export default ReasonsList;