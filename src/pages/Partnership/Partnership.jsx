import React from 'react';

import "./style.scss";
import openLink from "../../components/functions/openLink.js";
import OrangeButton from "../../components/shared/buttons/Orange_Button/OrangeButton.jsx";
import HomeBullets from "../../components/widgets/Home Bullets/HomeBullets.jsx";
import Suit from "../../components/widgets/Suit/Suit.jsx";
import Predict from "../../components/widgets/Predict/Predict.jsx";
import Planner from "../../components/widgets/Planner/Planner.jsx";
import linkImg from "../../../public/assets/svg/linkImg.svg";
import plannerImage from "../../../public/assets/img/plannerImage2.png";
import OrganizationGallery from "../../components/widgets/Organization gallery/OrganizationGallery.jsx";
import Transparency from "../../components/widgets/Transparency/Transperency.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import ReasonsList from "../../components/widgets/Reasons List/ReasonsList.jsx";
import WorksGallery from "../../components/widgets/Works Gallery/WorksGallery.jsx";
import responseYandex from "../../../public/assets/img/responseYandex.png";
import responseOtzovik from "../../../public/assets/img/responseOtzovik.png";
import CheckFeedbacks from "../../components/widgets/Check Feedbacks/CheckFeedbacks.jsx";
import Presentation from "../../components/widgets/Presentation/Presentation.jsx";
import Responsibility from "../../components/widgets/Responsibility/Responsibility.jsx";
import SocialMedia from "../../components/widgets/Social Media/SocialMedia.jsx";
import pseudoVid from "../Home/static/works/pseudoVid.png";
import ToBlog from "../../components/widgets/To Blog/ToBlog.jsx";
import FAQ from "../../components/widgets/FAQ/FAQ.jsx";
import EngConsulting from "../../components/widgets/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";
import materialsImg from "../../../public/assets/img/creditCardMaterials.png";

function Partnership() {
    return (
        <main className="partnership">
            <div className="partnership_header">
                <div className="flex_content">
                    <div id="left">
                        <h1>Зарабатывайте 10% <br/> комиссию с каждой сделки FIX-ремонт</h1>
                    </div>
                    <div id="right">
                        <h2>Партнерская программа
                            <br/>
                            от первого в России
                            <br/>
                            онлайн-сервиса по ремонту и строительству с фиксированной ценой</h2>
                        <OrangeButton text="Зарегистрироваться, как партнёр" link=""/>
                    </div>


                </div>
                <div id="bottom">
                    <div className="home_sections">
                        <button className="section_renovation section_box" onClick={openLink("/partnership/realtors")}>
                            <h3 className="renovation_para">Риэлторам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_building section_box" onClick={openLink("/partnership/builders")}>
                            <h3 className="building_para">Застройщикам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_box" id="section_partnership" onClick={openLink("/partnership/persons")}>
                            <h3 className="building_para">Физическим лицам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                    </div>
                </div>
            </div>

            <HomeBullets/>

            <Suit/>

            <Predict/>

            <Planner planner_img={plannerImage}
                     time_text="10 минут"
                     p1_text="первой выплаты вознаграждения"
                     step1_description="Регистрация на платформе"
                     step1_time="2"
                     step2_description="Оформление сделки"
                     step2_time="8"
                     step3_description="Проведение работ сервисом FIX-ремонт"
                     step3_time=""
                     step4_description="Первая выплата"
                     p2_text="Простая регистрация на платформе для партнёров FIX-ремонт займёт не более 2-х минут вашего времени!"
                     link_text="Инструкция по регистрации"
            />

            <OrganizationGallery/>

            <Transparency/>

            <Risk button_text="Рассчитать стоимость" backgorund={materialsImg}/>

            <ReasonsList
                head_text={<h1>Избавим ваших клиентов <br/> <b>от типичных проблем</b> <br/> ремонта квартиры:</h1>}/>

            <div id="home_works_gallery">
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

            <CheckFeedbacks/>

            <Presentation/>

            <Responsibility/>

            <SocialMedia/>

            <div className="pseudo_vid">
                <img alt="pseudo_video" src={pseudoVid}/>
            </div>

            <ToBlog/>

            <FAQ/>

            <EngConsulting/>

            <SeoDiv/>
        </main>
    );
}

export default Partnership;