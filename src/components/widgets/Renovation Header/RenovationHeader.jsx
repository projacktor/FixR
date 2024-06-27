import React from 'react';

import "./style.scss";
import OrangeButton from "../../shared/buttons/Orange_Button/OrangeButton.jsx";

function RenovationHeader({header1}) {
    return (
        <div className="head_banner">
            <h1>{header1}</h1>
            <div id="to_calculator">
                <h2>Заселитесь в квартиру мечты с мебелью в течение 3-х месяцев</h2>
                <OrangeButton text="Онлайн-калькулятор" link=""/>
            </div>
        </div>
    );
}

export default RenovationHeader;