import React from 'react';

import "./style.scss";

import SingleFAQ from "./SingleFAQ.jsx";
import whatsappIco from "../../../assets/svg/whatsappIcon.svg";
import telegramIco from "../../../pages/Home/static/icons/telegramIco.svg";

function Faq() {
    return (
        <div className="section_faq">
            <div className="section_faq_head">
                <h1>Отвечаем на <b>самые частые<br/> вопросы</b> наших клиентов </h1>
                <div className="section_faq_CEO">
                    <h4>Фанис Хасанов</h4>
                    <p>Основатель и руководитель FIX-ремонт <br/><br/>
                        Не нашли свой вопрос? Свяжитесь с нами!</p>
                    <div className="section_faq_contacts">
                        <a href="tel:8 (800) 000-00-00"><h4>8 (800) 000-00-00</h4></a>
                        <a>
                            <img className="section_faq_whatsapp" alt="Whatsapp" src={whatsappIco}/>
                        </a>
                        <a>
                            <img className="section_faq_telegram" alt="Telegram" src={telegramIco}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section_faq_box">
                <SingleFAQ text="Какой срок службы?"/>
                <SingleFAQ text="Какой срок службы?"/>
                <SingleFAQ text="Какой срок службы?"/>
                <SingleFAQ text="Какой срок службы?"/>
                <SingleFAQ text="Какой срок службы?"/>
                <SingleFAQ text="Какой срок службы?"/>
            </div>
        </div>
    );
}

export default Faq;