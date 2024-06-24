import React from 'react';

import "./style.scss";

import CheckButton from "../../components/helpers/buttons/CheckButton/CheckButton.jsx";
import Scroller from "../../components/helpers/Scroller/Scroller.jsx";
import WorksGallery from "../../components/page chunks/Works Gallery/WorksGallery.jsx";
import ToBlog from "../../components/page chunks/To Blog/ToBlog.jsx";
import EngConsulting from "../../components/page chunks/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";

import feedbacks from "../../assets/img/feedbacks.png";

function Feedbacks() {
    return (
        <main className="feedbacks">
            <div className="headers">
                <p>С 2013 года нам доверились уже более 10 000 клиентов</p>
                <h1>Отзывы наших клиентов </h1>
            </div>
            <div className="feedbacks_content">
                <CheckButton text="Оставить свой отзыв" link="/feedbacks"/>
                <div className="feedbacks_gallery">
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                </div>
            </div>

            <div id="platforms_responses">
                <h1>Отзывы с независимыз площадок</h1>
                <img alt="feedbacks" src={feedbacks}/>
                <div id="fdbk_scroller">
                    <Scroller />
                </div>
            </div>

            <div id="feedbacks_works_gallery">
                <h1>Работаем <b>одинаков хорошо</b></h1>
                <p id="feedbacks_works_gallery_pHeader">как на крупных объектах, так и в небольших квартирах</p>
                <div id="feedbacks_works_gallery_WG_container">
                    <WorksGallery />
                </div>
                <div id="feedbacks_works_gallery_CB_container">
                    <CheckButton text="Смотреть все работы" link="/portfolio"/>
                </div>
            </div>

            <ToBlog />
            <EngConsulting/>
            <SeoDiv/>
        </main>
    );
}

export default Feedbacks;