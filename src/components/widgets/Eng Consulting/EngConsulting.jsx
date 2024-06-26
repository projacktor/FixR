import React from 'react';

import "./style.scss"
import "../../shared/Row Bullet/style.scss";

import BlackButton from "../../shared/buttons/Consulting Black Btn/BlackButton.jsx";

import mainEng from "../../../../public/assets/img/mainEngPhoto.png"

function EngConsulting() {
    return (
        <div className="eng_consulting">
            <div className="eng_consulting_textBox">
                <p id="eng_quest">Остались вопросы?</p>
                <h1><b>Запишитесь</b> на <br/> консультацию от <br/> инженера FIX-ремонт </h1>
                <ul>
                    <li>Поможем подобрать тариф</li>
                    <li>Расскажем про сроки строительства</li>
                    <li>Озвучим стоимость материалов</li>
                    <li>Поделимся опытом решения подобных задач</li>
                </ul>
            </div>
            <img src={mainEng} alt="Фото главного инженера"/>
            <div className="eng_consulting_imgBox">
                <h2>Саид<br/> Низамов</h2>
                <p>Главный иженер <br/> FIX-ремонт</p>
            </div>
            <div className="get_contact_rower">
                <p>Как с нами связаться?</p>
                <div className="get_contact_rower_bullets">
                    <select id="contact-method" className="row_bullet eng_chose_contact">
                        <option>Написать в WhatsApp</option>
                        <option>Написать в Telegram</option>
                    </select>
                    <input name="phone_number" autoComplete="tel" type="tel" placeholder="Ваш номер телефона" className="row_bullet eng_phone_input"/>
                    <BlackButton text="Записаться на консультацию"/>
                </div>
            </div>
        </div>
    );
}

export default EngConsulting;