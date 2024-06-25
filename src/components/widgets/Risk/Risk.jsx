import React from 'react';

import "./style.scss";

import OrangeButton from "../../shared/buttons/Orange_Button/OrangeButton.jsx";

import creditCardImg from "../../../../public/assets/img/creditCardImg.png";
import materialsImg from "../../../../public/assets/img/creditCardMaterials.png";
import creditBullets from "../../../../public/assets/img/creditBullets.png";


function Risk() {
    return (
        <div className="risk">
            <div id="risk_left">
                <div id="credit_card_block">
                    <img src={creditCardImg} alt="credit_card"/>
                </div>
                <div id="credit_bullets">
                    <img alt="bullets" src={creditBullets}/>
                </div>
            </div>
            <div id="risk_right">
                <img alt="brush_picture" src={materialsImg}/>
                <div id="button_controller">
                    <OrangeButton text={"Рассчитать стоимость"} className={"orange_button"}/>
                </div>
            </div>

        </div>
    );
}

export default Risk;