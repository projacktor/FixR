import React from 'react';

import "./style.scss";

import CheckButton from "../../components/CheckButton/CheckButton.jsx";

import feedbacks from "../../assets/img/feedbacks.png";
import Scroller from "../../components/Scroller/Scroller.jsx";
import WorksGallery from "../../components/Works Gallery/WorksGallery.jsx";
import BlogGallery from "../../components/Blog Gallery/BlogGallery.jsx";
import ToBlog from "../../components/To Blog/ToBlog.jsx";

function Feedbacks() {
    return (
        <main className="feedbacks">
            <div className="headers">
                <p>С 2013 года нам доверились уже более 10 000 клиентов</p>
                <h1>Отзывы наших клиентов </h1>
            </div>
            <div className="feedbacks_content">
                <CheckButton text="Оставить свой отзыв"/>
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
                    <CheckButton text="Смотреть все работы"/>
                </div>
            </div>

            <div id="to_blog_sec">
                <ToBlog />
            </div>

        </main>
    );
}

export default Feedbacks;