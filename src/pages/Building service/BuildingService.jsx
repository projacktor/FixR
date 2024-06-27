import React from 'react';

import "./style.scss";

import RenovationHeader from "../../components/widgets/Renovation Header/RenovationHeader.jsx";
import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";
import SelfRenovation from "../../components/widgets/Self-renovation/SelfRenovation.jsx";
import ReasonsList from "../../components/widgets/Reasons List/ReasonsList.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import Comparison from "../../components/widgets/Comparison/Comparison.jsx";
import FavoriteBusiness from "../../components/widgets/Favorite business/FavoriteBusiness.jsx";
import WorksGallery from "../../components/widgets/Works Gallery/WorksGallery.jsx";
import CheckFeedbacks from "../../components/widgets/Check Feedbacks/CheckFeedbacks.jsx";
import Planner from "../../components/widgets/Planner/Planner.jsx";
import Presentation from "../../components/widgets/Presentation/Presentation.jsx";
import Responsibility from "../../components/widgets/Responsibility/Responsibility.jsx";
import SocialMedia from "../../components/widgets/Social Media/SocialMedia.jsx";
import SelfRenovationGallery from "../../components/widgets/Self-renovation Gallery/SelfRenovationGallery.jsx";
import LongBlock from "../../components/widgets/Long block/LongBlock.jsx";
import ToBlog from "../../components/widgets/To Blog/ToBlog.jsx";
import FAQ from "../../components/widgets/FAQ/FAQ.jsx";
import EngConsulting from "../../components/widgets/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";

import renovationHeaderBackground from "../../../public/assets/img/headBannerBuildingService.png";
import contactIco from "../Home/static/icons/contactIcon.svg";
import rublIco from "../Home/static/icons/rublIcon.svg";
import shieledIco from "../Home/static/icons/shiledIcon.svg";
import lampIco from "../Home/static/icons/lampIcon.svg";
import flagIco from "../Home/static/icons/flagIcon.svg";
import plannerImg1 from "../Home/static/works/plannerImg1.png";
import responseYandex from "../../../public/assets/img/responseYandex.png";
import pseudoVid from "../Home/static/works/pseudoVid.png";
import responseOtzovik from "../../../public/assets/img/responseOtzovik.png";

function BuildingService() {
    return (
        <main className="building_service">
            <RenovationHeader header1="Строительство домов под ключ по готовым проектам и с фиксированной ценой"
                              header2="6 месяцев до готового дома мечты с благоустройством и ремонтом"
                              image={renovationHeaderBackground}/>

            <div className="bullets">
                <WhiteBullet line1="Без визитов" line2="на объект" src={contactIco}/>
                <WhiteBullet line1="100% гарантия фиксированной" line2="сметы" src={rublIco}/>
                <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco}/>
                <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco}/>
                <WhiteBullet line1="Все берем на себя" line2="и работаем под ключ" src={flagIco}/>
            </div>

            <SelfRenovation/>

            <ReasonsList/>

            <Risk/>

            <Comparison/>

            <FavoriteBusiness/>

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

            <Planner planner_img={plannerImg1}/>

            <Presentation/>

            <Responsibility/>

            <SocialMedia/>

            <SelfRenovationGallery/>

            <LongBlock/>

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

export default BuildingService;