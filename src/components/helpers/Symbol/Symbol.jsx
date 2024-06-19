import React from 'react';

import "./style.scss";


function Symbol({header_src}) {
    return (
        <div className="symbol_block">
            <a target="_blank">
                <img alt="FIX-remont_logo" className="contacts_header_logo" src={header_src}/>
            </a>
            <div className="contacts_header_line line1"></div>
            <p className="tagline"> Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b></p>
        </div>
    );
}

export default Symbol;