import React from 'react';

import "./style.scss";

import headerLogo from "../../assets/img/headerLogo.svg";
import line from "../../assets/img/headerLine.svg";
import clockIcon from "../../assets/img/headerClockIcon.svg";
import phoneIcon from "../../assets/img/headerPhone.svg";
import onlineCircle from "../../assets/img/onlineCircleHeader.svg"
import whatsapp from "../../assets/img/whatsappIco.svg";
import telegram from "../../assets/img/telegramIco.svg";
import profileIcon from "../../assets/img/profileIcon.svg";
import menuBar from "../../assets/img/menuBar.svg";


function Header() {
    return (
        <header>
            <div className="contacts">
                <img className="contacts_header_logo" src={headerLogo}/>
                <img className="contacts_header_line line1" src={line}/>
                <p className="tagline"> Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b></p>
                <img className="contacts_header_line line2" src={line}/>
                <div className="worktime_container">
                    <img className="clock" src={clockIcon}/>
                    <p className="worktime">Звоните Пн-Вс: 8:30 - 19:00</p>
                </div>
                <img className="contacts_header_line line3" src={line}/>
                <div className="phone_container">
                    <img className="phone" src={phoneIcon}/>
                    <a className="phone_number"><p className="phone_number">+7 (966) 250-77-99</p></a>
                </div>
            </div>

            <div className="social">
                <div className="write_us_container">
                    <img className="online_circle" src={onlineCircle}/>
                    <p className="write_us">Напишите нам, <br/> мы сейчас онлайн</p>
                </div>
                <div className="messenger_container">
                    <img className="whatsapp_icon" src={whatsapp}/>
                    <img className="telegram_icon" src={telegram}/>
                </div>
            </div>

            <div className="profile">
                <img className="profile_icon" src={profileIcon}/>
                <p className="to_profile_tagline">Личный кабинет</p>
            </div>

            <div className="menu">
                <img className="menu_burger" src={menuBar}/>
            </div>
        </header>
    );
}

export default Header;