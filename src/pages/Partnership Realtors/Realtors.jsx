import React from 'react';

import "./style.scss";

import RenovationHeader from "../../components/widgets/Renovation Header/RenovationHeader.jsx";
import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";

import renovationHeaderBackground from "../../../public/assets/img/headBannerPartnershipRealtors.png";
import contactIco from "../Home/static/icons/contactIcon.svg";
import reputationIco from "../../../public/assets/svg/reputation.svg";
import shieledIco from "../Home/static/icons/shiledIcon.svg";
import lampIco from "../Home/static/icons/lampIcon.svg";
import tickIco from "../../../public/assets/svg/tick.svg";
import Designs from "../../components/widgets/Designs/Designs.jsx";
import Benefits from "../../components/widgets/Benefits/Benefits.jsx";

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
        </main>
    );
}

export default Realtors;