import React from 'react';

import WhiteBullet from "../../components/helpers/White bullet/WhiteBullet.jsx";
import CEOgreeting from "../../components/page chunks/CEO greeting/CEOgreeting.jsx";
import BlackBullet from "../../components/helpers/Black bullet/BlackBullet.jsx";

import "./style.scss";

import src1 from "../../assets/svg/15000.svg"
import src2 from "../../assets/svg/998.svg"
import src3 from "../../assets/svg/10.svg"
import pseudoVid from "../Home/static/works/pseudoVid.png";
import russia from "../../assets/img/Russia.png";
import Inviting from "../../components/page chunks/Inviting/Inviting.jsx";
import Presentation from "../../components/page chunks/Presentation/Presentation.jsx";
import Responsibility from "../../components/page chunks/Responsibility/Responsibility.jsx";

function About() {
    const blackBullet1 = <p id="description">Ремонт, строительство и обслуживание квартир, жилых домов под ключ</p>;
    const blackBullet2 = <p id="description">Повысить культуру и сервис сферы строительства, чтобы каждый заказчик мог получить качество без переделок и контроля исполнителей</p>;
    const blackBullet3 = <ul id="description">
        <li>Создание управляющей компании-регулятора</li>
        <li>Повышение качеств услуг за счёт разработки единых стандартов</li>
        <li>Перемены в сфере, чтобы для людей ремонт перестал быть больной темой</li>
    </ul>
    return (
        <main className="about_page">
            <h1 className="main_header">О компании FIX-ремонт</h1>
            <div id="white_bullets">
                <WhiteBullet line1="Реализовано" line2="проектов" src={src1}/>
                <WhiteBullet line1="Довольных" line2="клиентов" src={src2}/>
                <WhiteBullet line1="Лет на" line2="рынке РФ" src={src3}/>
            </div>

            <div id="black_bullets">
                <BlackBullet head="Сфера деятельности" description={blackBullet1}/>
                <BlackBullet head="Миссия" description={blackBullet2}/>
                <BlackBullet head="Цели" description={blackBullet3}/>
            </div>

            <div className="pseudo_vid">
                <img src={pseudoVid} alt="pseudo_video"/>
            </div>

            <div id="CEO_greeting">
                <CEOgreeting/>
            </div>

            <div className="Russia_slider">
                <h2>Работаем с клиентами по всей <br/> территории Российской Федерации</h2>
                <p>Несколько бригад в каждом регионе страны</p>
                <img alt="Russia" src={russia}/>
            </div>

            <div id="inviting">
                <Inviting/>
            </div>

            <div id="about_presentation">
                <Presentation/>
            </div>

            <div id="about_responsibility">
                <Responsibility/>
            </div>
        </main>
    );
}

export default About;