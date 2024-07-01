import React from 'react';

import "./style.scss";

import RenovationHeader from "../../components/widgets/Renovation Header/RenovationHeader.jsx";
import Designs from "../../components/widgets/Designs/Designs.jsx";
import Benefits from "../../components/widgets/Benefits/Benefits.jsx";
import Transparency from "../../components/widgets/Transparency/Transperency.jsx";
import Risk from "../../components/widgets/Risk/Risk.jsx";
import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";

import renovationHeaderBackground from "../../../public/assets/img/headBannerPartnershipRealtors.png";
import contactIco from "../Home/static/icons/contactIcon.svg";
import reputationIco from "../../../public/assets/svg/reputation.svg";
import shieledIco from "../Home/static/icons/shiledIcon.svg";
import lampIco from "../Home/static/icons/lampIcon.svg";
import tickIco from "../../../public/assets/svg/tick.svg";
import riskBackground from "../../../public/assets/img/riskBackground2.png";
import Predict from "../../components/widgets/Predict/Predict.jsx";
import OrganizationGallery from "../../components/widgets/Organization gallery/OrganizationGallery.jsx";
import plannerImage from "../../../public/assets/img/plannerImage2.png";
import Planner from "../../components/widgets/Planner/Planner.jsx";
import Feedbacks from "../Feedbacks/Feedbacks.jsx";
import FeedbacksGallery from "../../components/widgets/Feedbacks gallery/FeedbacksGallery.jsx";

function Realtors() {
    return (
        <main className="partnership_realtors">
            <RenovationHeader image={renovationHeaderBackground}
                              header1={<h1 style={{width: '36rem'}}>Приводите клиентов на ремонт с фикс ценой и
                                  зарабатывайте от 1000 руб/м² с каждой сделки</h1>}
                              header2="Обеспечим ваших клиентов сервисом и услугой высшего уровня без рисков для репутации"
                              link_text="Подробнее"/>

            <div className="bullets">
                <WhiteBullet line1="Следите за ходом" line2="работ онлайн" src={contactIco}/>
                <WhiteBullet line1="Ценим вашу" line2="и свою репутации" src={reputationIco}/>
                <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco}/>
                <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco}/>
                <WhiteBullet line1="Обеспечим лучший" line2="сервис для клиента" src={tickIco}/>
            </div>

            <Designs/>

            <Benefits/>

            <Predict/>

            <Risk button_text="Стать партнером" backgorund={riskBackground}/>

            <Transparency/>

            <OrganizationGallery/>

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

            <FeedbacksGallery head_text={<h1 style={{width: '100%'}}>Посмотрите, <b>что говорят о нас</b> наши текущие партнёры</h1>}/>
        </main>
    );
}

export default Realtors;