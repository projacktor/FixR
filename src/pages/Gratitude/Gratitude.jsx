import React from 'react';

import BlackButton from "../../components/helpers/buttons/Consulting Black Btn/BlackButton.jsx";

import "./style.scss";

function Gratitude() {
    return (
        <main className="thank_you">
            <div id="container">
                <h1>Благодарим
                    <br/>
                    за обращение!</h1>
                <h2>Ожидайте звонка с номера +375 (800)-00-00</h2>
                <BlackButton text="Вернуться на сайт" link="/"/>
            </div>
        </main>
    );
}

export default Gratitude;