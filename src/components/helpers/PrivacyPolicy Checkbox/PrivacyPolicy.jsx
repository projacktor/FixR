import React from 'react';

import "./style.scss";

function PrivacyPolicy() {
    return (
        <div className="consent">
            <input type="checkbox" id="consent"/>
            <label htmlFor="consent">Согласен с условиями <a href="#">Политики конфиденциальности данных</a></label>
        </div>
    );
}

export default PrivacyPolicy;