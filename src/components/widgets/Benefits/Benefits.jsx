import React from 'react';

import "./style.scss";

import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

import benefitsBulletsLight from "../../../../public/assets/img/benefitsBulletsLight.png"
import benefitsBulletsDarck from "../../../../public/assets/img/benefitsBulletsDarck.png"

function Benefits() {
    return (
        <div className="benefits">
            <div id="left">
                <div id="content_wrapper">
                    <h1>
                        Выгода работы <br/> с нами очевидна
                    </h1>
                    <CheckButton text="Стать партнёром"/>
                </div>
            </div>
            <div id="right">
                <h1>Для вас:</h1>
                <img alt="benefits_bullets-1" src={benefitsBulletsLight}/>
                <h1>Для ваших клиентов:</h1>
                <img alt="benefits_bullets-2" src={benefitsBulletsDarck}/>
            </div>
        </div>
    );
}

export default Benefits;