import React from 'react';

import "./style.scss";

import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";
import Responsibility from "../../components/widgets/Responsibility/Responsibility.jsx";
import Presentation from "../../components/widgets/Presentation/Presentation.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import WorksGallery from "../../components/widgets/Works Gallery/WorksGallery.jsx";
import CheckFeedbacks from "../../components/widgets/Check Feedbacks/CheckFeedbacks.jsx";
import SocialMedia from "../../components/widgets/Social Media/SocialMedia.jsx";
import ToBlog from "../../components/widgets/To Blog/ToBlog.jsx";
import FavoriteBusiness from "../../components/widgets/Favorite business/FavoriteBusiness.jsx";
import FAQ from "../../components/widgets/FAQ/FAQ.jsx";
import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";
import BlackButton from "../../components/shared/buttons/Consulting Black Btn/BlackButton.jsx";
import OrangeButton from "../../components/shared/buttons/Orange_Button/OrangeButton.jsx";
import Planner from "../../components/widgets/Planner/Planner.jsx";

import linkImg from "../../../public/assets/svg/linkImg.svg";
import contactIco from "./static/icons/contactIcon.svg";
import rublIco from "./static/icons/rublIcon.svg";
import shieledIco from "./static/icons/shiledIcon.svg";
import lampIco from "./static/icons/lampIcon.svg";
import flagIco from "./static/icons/flagIcon.svg";
import creditImg from "../../../public/assets/img/creditImg.png";
import responseYandex from "../../../public/assets/img/responseYandex.png";
import responseOtzovik from "../../../public/assets/img/responseOtzovik.png";
import plannerImg1 from "./static/works/plannerImg1.png";
import pseudoVid from "./static/works/pseudoVid.png";


function Home() {

    return (
        <main className="home_content">

            <div className="intro_container">
                <div className="mega_box">
                    <p className="mega_box_tagline">Первый в России<br/>
                        онлайн-сервис<br/>
                        по ремонту и строительству<br/>
                        с фиксированной стоимостью</p>
                </div>

                <div id="right_part">
                    <div className="work_station">
                        <p className="work_station_tagline">Воплотим вашу<br/>
                            мечту в реальность<br/> без визитов на<br/> объект</p>
                        <div className="buttons">
                            <OrangeButton text="Онлайн-калькулятор"/>
                            <BlackButton text="Стать партнёром"/>
                        </div>
                    </div>
                    <div className="home_sections">
                        <button className="section_renovation section_box">
                            <p className="renovation_para">Ремонт</p>
                            <p className="hidden_text">Без визитов на объект. <br/>
                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_building section_box">
                            <p className="building_para">Строительство</p>
                            <p className="hidden_text">Без визитов на объект. <br/>

                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_box" id="section_partnership">
                            <p className="building_para">Партнерская программа</p>
                            <p className="hidden_text">Без визитов на объект. <br/>
                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="bullets">
                <WhiteBullet line1="Без визитов" line2="на объект" src={contactIco}/>
                <WhiteBullet line1="100% гарантия фиксированной" line2="сметы" src={rublIco}/>
                <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco}/>
                <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco}/>
                <WhiteBullet line1="Все берем на себя" line2="и работаем под ключ" src={flagIco}/>
            </div>

            <FavoriteBusiness/>

            <div id="credit">
                <a href="">
                    <img alt="credit" src={creditImg}/>
                </a>
            </div>

            <div id="home_risk">
                <Risk/>
            </div>
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

            <div id="home_check_feedbacks">
                <CheckFeedbacks/>
            </div>

            <Planner planner_img={plannerImg1}/>

            <div id="home_presentation">
                <Presentation />
            </div>

            <div id="home_responsibility">
                <Responsibility/>
            </div>

            <div id="home_social_media">
                <SocialMedia/>
            </div>

            <div className="pseudo_vid">
                <img alt="pseudo_video" src={pseudoVid}/>
            </div>

            <div id="home_to_blog">
                <ToBlog/>
            </div>

            <div id="home_faq">
                <FAQ/>
            </div>

            <div className="home_seo">
                <SeoDiv/>
            </div>
        </main>
    );
}

export default Home;
