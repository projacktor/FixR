import React from 'react';

import "./style.scss";

import headerLogo from "../../../assets/svg/headerLogo.svg";
import clockIcon from "../../../assets/svg/headerClockIcon.svg";
import phoneIcon from "../../../assets/svg/headerPhone.svg";
import onlineCircle from "../../../assets/svg/onlineCircleHeader.svg";
import whatsapp from "../../../assets/svg/whatsappIcon.svg";
import telegram from "../../../assets/svg/telegramIcon.svg";
import profileIcon from "../../../assets/svg/profileIcon.svg";
import menuBar from "../../../assets/svg/menuBar.svg";

function Header() {
    return (
        <header>
            <div className="contacts">
                <a target="_blank">
                    <img alt="FIX-remont_logo" className="contacts_header_logo" src={headerLogo}/>
                </a>
                <div className="contacts_header_line line1"></div>
                <p className="tagline"> Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b></p>
                <div className="contacts_header_line line2"></div>
                <div className="worktime_container">
                    <img alt="clock_icon" className="clock" src={clockIcon}/>
                    <p className="worktime">Звоните Пн-Вс: 8:30 - 19:00</p>
                </div>
                <div className="contacts_header_line line3"></div>
                <address className="phone_container">
                    <img alt="phone_icon" className="phone" src={phoneIcon}/>
                    <a target="_blank" className="phone_number" href="tel:+7 (966) 250-77-99"><p className="phone_number">+7 (966) 250-77-99</p></a>
                </address>
            </div>

            <div className="social">
                <div className="write_us_container">
                    <img alt="online" className="online_circle" src={onlineCircle}/>
                    <p className="write_us">Напишите нам, <br/> мы сейчас онлайн</p>
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

            <div className="profile">
                <img className="profile_icon" src={profileIcon}/>
                <p className="to_profile_tagline">Личный кабинет</p>
            </div>

            <div className="menu">
                <button>
                    <img alt="menu button" className="menu_burger" src={menuBar}/>
                </button>
            </div>
        </header>
    );
}

export default Header;
