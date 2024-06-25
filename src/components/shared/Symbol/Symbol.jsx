import React from 'react';

import "./style.scss";

function Symbol({header_src, lineColor}) {
    const lineStyle = {
        borderLeft: `1px dashed ${lineColor}`,
    }
    return (
        <div className="symbol_block">
            <a href="/">
                <img alt="FIX-remont_logo" className="contacts_header_logo" src={header_src}/>
            </a>
            <div className="contacts_header_line line1" style={lineStyle}></div>
            <p className="tagline"> Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b></p>
        </div>
    );
}

export default Symbol;