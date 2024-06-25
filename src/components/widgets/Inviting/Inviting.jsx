import React from 'react';

import "./style.scss";

import BlackButton from "../../shared/buttons/Consulting Black Btn/BlackButton.jsx";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

import inviteL from "../../../../public/assets/img/invitingLeft.png";

function Inviting() {
    return (
        <div className="inviting">
            <div id="left">
                <img alt="we_invite_you" src={inviteL}/>
            </div>
            <div id="right">
                <h2>До <b>-10% от суммы</b> чека - это ваша комиссия за приведенного клиента</h2>
                <div id="buttons">
                    <BlackButton text="Зарегестрироватьсяв в личном кабинете партнёра"/>
                    <CheckButton text="Узнать подробнее"/>
                </div>
            </div>
        </div>
    );
}

export default Inviting;