import React from 'react';

import "./style.scss";
import OrangeButton from "../../shared/buttons/Orange_Button/OrangeButton.jsx";

function RenovationHeader({header1, header2, image, link_text}) {
    const background = {
        backgroundImage: `url(${image})`
    }
    return (
        <div className="head_banner" style={background}>
            <h1>{header1}</h1>
            <div id="to_calculator">
                <h2>{header2}</h2>
                <a>{link_text}</a>
                <OrangeButton text="Онлайн-калькулятор" link=""/>
            </div>
        </div>
    );
}

export default RenovationHeader;