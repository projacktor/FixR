import React from 'react';

import "./style.scss";

import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";
import CEOgreeting from "../../components/widgets/CEO greeting/CEOgreeting.jsx";
import BlackBullet from "../../components/shared/Black bullet/BlackBullet.jsx";
import Inviting from "../../components/widgets/Inviting/Inviting.jsx";
import Presentation from "../../components/widgets/Presentation/Presentation.jsx";
import Responsibility from "../../components/widgets/Responsibility/Responsibility.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import SocialMedia from "../../components/widgets/Social Media/SocialMedia.jsx";
import EngConsulting from "../../components/widgets/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";

import src1 from "../../../public/assets/svg/15000.svg"
import src2 from "../../../public/assets/svg/998.svg"
import src3 from "../../../public/assets/svg/10.svg"
import pseudoVid from "../Home/static/works/pseudoVid.png";
import russia from "../../../public/assets/img/Russia.png";

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

            <div id="presentation">
                <Presentation/>
            </div>

            <div id="responsibility">
                <Responsibility/>
            </div>

            <div id="risk">
                <Risk/>
            </div>

            <div id="social_media">
                <SocialMedia/>
            </div>

            <div id="eng_consulting">
                <EngConsulting/>
            </div>

            <div id="seo">
                <SeoDiv/>
            </div>
        </main>
    );
}

export default About;