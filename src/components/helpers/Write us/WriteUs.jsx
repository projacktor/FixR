import React from 'react';

import "./style.scss";
import onlineCircle from "../../../assets/svg/onlineCircleHeader.svg";
import whatsapp from "../../../assets/svg/whatsappIcon.svg";
import telegram from "../../../assets/svg/telegramIcon.svg";

function WriteUs() {
    return (
        <div className="write_us">
            <div id="write_us_text_container">
                <img alt="online" className="online_circle" src={onlineCircle}/>
                <p>Напишите нам, <br/> мы сейчас онлайн</p>
            </div>
            <address className="messenger_container">
                <a target="_blank">
                    <img alt="whatsapp" className="whatsapp_icon" src={whatsapp}/>
                </a>
                <a target="_blank">
                    <img alt="telegram" className="telegram_icon" src={telegram}/>
                </a>
            </address>
        </div>
    );
}

export default WriteUs;