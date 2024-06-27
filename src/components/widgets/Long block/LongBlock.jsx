import React from 'react';

import "./style.scss";
import BlackButton from "../../shared/buttons/Consulting Black Btn/BlackButton.jsx";

function LongBlock() {
    return (
        <div className="long_block">
            <div id="text">
                <h2>Исключите риски и доверьте свой объект FIX-ремонт</h2>
                <h3>мы не просто берём все финансовые риски на себя, но и закрепляем их юридически</h3>
            </div>
            <BlackButton text="Онлайн-калькулятор"/>
        </div>
    );
}

export default LongBlock;