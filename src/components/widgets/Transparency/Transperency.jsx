import React from 'react';

import "./style.scss";

import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

import transparencyBullets from "../../../../public/assets/img/transparencyBullets.png"

function Transparency() {
    return (
        <div className="transparency">
            <h1>Весь процесс сотрудничества на <b>100% прозрачный</b> и контролируемый</h1>
            <img alt="transparancy_bullets" src={transparencyBullets}/>
            <div id="button_container">
                <CheckButton text="Зарегистрироваться на платформе"/>
            </div>
        </div>
    );
}

export default Transparency;