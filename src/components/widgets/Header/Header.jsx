import React from 'react';

import "./style.scss";

import Symbol from "../../shared/Symbol/Symbol.jsx";
import ContactsContainer from "../../shared/Contacts Container/ContactsContainer.jsx";
import WriteUs from "../../shared/Write us/WriteUs.jsx";

import headerLogo from "../../../../public/assets/svg/headerLogo.svg";
import profileIcon from "../../../../public/assets/svg/profileIcon.svg";
import menuBar from "../../../../public/assets/svg/menuBar.svg";

function Header() {
    return (
        <header>
            <div className="header_left">
                <div id="symbol_part">
                    <Symbol header_src={headerLogo} lineColor="rgba(0, 0, 0, 0.5)"/>
                </div>
                <div className="contacts_header_line line2"></div>
                <div id="contacts_part">
                    <ContactsContainer/>
                </div>
            </div>

            <WriteUs/>

            <button className="profile">
                <img alt="profile_icon" className="profile_icon" src={profileIcon}/>
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
