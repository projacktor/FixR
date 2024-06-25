import React, {useEffect} from 'react';

import "./style.scss";

import Sections from "../../components/shared/Sections/Sections.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import WorksGallery from "../../components/widgets/Works Gallery/WorksGallery.jsx";
import CheckFeedbacks from "../../components/widgets/Check Feedbacks/CheckFeedbacks.jsx";
import EngConsulting from "../../components/widgets/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";

import responseYandex from "../../../public/assets/img/responseYandex.png";
import responseOtzovik from "../../../public/assets/img/responseOtzovik.png";

function Services() {
    return (
        <main className="services">
            <div id="sections">
                <h1 className="main_header">Услуги FIX-ремонт</h1>
                <Sections/>
            </div>

            <div id="services_risk">
                <Risk/>
            </div>

            <div id="services_works_gallery">
                <div className="response_header">
                    <div id="response_names">
                        <p>Но лучше всего о нас расскажут</p>
                        <h1>Выполненные работы <br/> и отзывы клиентов </h1>
                    </div>
                    <div id="response_bullets">
                        <a className="response_bullet" target="_blank"
                           href="https://yandex.ru/maps/org/fix_remont/110403249402/features/?ll=49.192026%2C55.826770&mode=search&sll=48.744609%2C55.752080&sspn=0.090294%2C0.027834&tab=features&text=%D1%84%D0%B8%D0%BA%D1%81%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82&z=12">
                            <img alt="yandex_picture" src={responseYandex}/>
                            <p><u>Смотреть отзывы на Яндекс</u></p>
                        </a>
                        <a className="response_bullet response_bullet2" target="_blank">
                            <img alt="otzovik_picture" src={responseOtzovik}/>
                            <p><u>Смотреть отзывы на Отзовик</u></p>
                        </a>
                    </div>
                </div>
                <WorksGallery/>
            </div>

            <div id="services_check_feedbacks">
                <CheckFeedbacks/>
            </div>

            <div id="services_eng_consulting">
                <EngConsulting/>
            </div>

            <div id="services_seo">
                <SeoDiv/>
            </div>
        </main>
    );
}

export default Services;