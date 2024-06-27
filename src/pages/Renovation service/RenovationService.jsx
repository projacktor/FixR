import React from 'react';

import "./style.scss";
import RenovationHeader from "../../components/widgets/Renovation Header/RenovationHeader.jsx";
import WhiteBullet from "../../components/shared/White bullet/WhiteBullet.jsx";
import SelfRenovation from "../../components/widgets/Self-renovation/SelfRenovation.jsx";

import contactIco from "../Home/static/icons/contactIcon.svg";
import rublIco from "../Home/static/icons/rublIcon.svg";
import shieledIco from "../Home/static/icons/shiledIcon.svg";
import lampIco from "../Home/static/icons/lampIcon.svg";
import flagIco from "../Home/static/icons/flagIcon.svg";

function RenovationService() {
    return (
        <main className="renovation-service">
            <RenovationHeader header1="Ремонт квартир под ключ по готовым проектам и с фиксированной ценой"
                              header2="Заселитесь в квартиру мечты с мебелью в течение 3-х месяцев"/>
            <div className="bullets">
                <WhiteBullet line1="Без визитов" line2="на объект" src={contactIco}/>
                <WhiteBullet line1="100% гарантия фиксированной" line2="сметы" src={rublIco}/>
                <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco}/>
                <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco}/>
                <WhiteBullet line1="Все берем на себя" line2="и работаем под ключ" src={flagIco}/>
            </div>
            <div id="self-renovation">
                <SelfRenovation/>
            </div>
        </main>
    );
}

export default RenovationService;