import React from 'react';

import "./style.scss";

import headerLogo from "../../../assets/svg/headerLogo.svg";

function Symbol(props) {
    return (
        <div className="symbol_block">
            <a target="_blank">
                <img alt="FIX-remont_logo" className="contacts_header_logo" src={headerLogo}/>
            </a>
            <div className="contacts_header_line line1"></div>
            <p className="tagline"> Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b></p>
        </div>
    );
}

export default Symbol;