import React from 'react';

import "./style.scss";

function PrivacyPolicy({color}) {
    const textStyle = {
        color: `${color}`,
    }
    return (
        <div className="consent" style={textStyle}>
            <input type="checkbox" id="consent"/>
            <label htmlFor="consent">Согласен с условиями <a href="#">Политики конфиденциальности данных</a></label>
        </div>
    );
}

export default PrivacyPolicy;