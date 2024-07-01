import React from 'react';

import "./style.scss";

import IPhonePicture from "../../../../public/assets/img/IPhonePicture.png";
import raffle from "../../../../public/assets/img/raffle.png";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

function Payment() {
    return (
        <div className="payment">
            <div id="left">
                <img alt="IPhone_picture" src={IPhonePicture}/>
            </div>
            <div id="right">
                <div id="text_box">
                    <h1><b>Выплачиваем от <br/> 1 000 руб</b> за каждый замер, даже если договор не закроется</h1>
                    <p>и проводим регулярные розыгрыши IPhone 15 Pro Max среди партнеров</p>
                </div>
                <a><img alt="to_raffle" src={raffle}/></a>
                <CheckButton text="Стать партнёром"/>
            </div>
        </div>
    );
}

export default Payment;