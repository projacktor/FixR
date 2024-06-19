import React from 'react';

import WriteUs from "../../helpers/Write us/WriteUs.jsx";

import "./style.scss";

import headerLogo from "../../../assets/svg/headerLogo.svg";
import clockIcon from "../../../assets/svg/headerClockIcon.svg";
import phoneIcon from "../../../assets/svg/headerPhone.svg";
import profileIcon from "../../../assets/svg/profileIcon.svg";
import menuBar from "../../../assets/svg/menuBar.svg";
import Symbol from "../../helpers/Symbol/Symbol.jsx";

function Header() {
    return (
        <header>
            <div className="contacts">
                <Symbol/>
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

            <WriteUs/>

            <button className="profile">
                <img className="profile_icon" src={profileIcon}/>
                <p className="to_profile_tagline">Личный кабинет</p>
            </button>

            <div className="menu">
                <button>
                    <img alt="menu button" className="menu_burger" src={menuBar}/>
                </button>
            </div>
        </header>
    );
}

export default Header;
