import React from 'react';

import "./style.scss";
import CheckButton from "../../shared/buttons/CheckButton/CheckButton.jsx";

function Designs() {
    return (
        <div className="designs">
            <div id="text_box">
                <h1>FIX-ремонт — это более <br/> <b>36 готовых дизайнерских решений</b> под любой бюджет</h1>
                <p>с реализацией “под ключ” и без финансовых и репутационных рисков для партнёров</p>
            </div>
            <div id="button_container">
                <CheckButton text="Пройти 3D-тур по проектам"/>
            </div>
        </div>
    );
}

export default Designs;