import React from 'react';

import "./style.scss";

import WhiteBullet from "../../shared/White bullet/WhiteBullet.jsx";

import contactIco from "../../../pages/Home/static/icons/contactIcon.svg";
import rublIco from "../../../pages/Home/static/icons/rublIcon.svg";
import shieledIco from "../../../pages/Home/static/icons/shiledIcon.svg";
import lampIco from "../../../pages/Home/static/icons/lampIcon.svg";
import flagIco from "../../../pages/Home/static/icons/flagIcon.svg";

function HomeBullets() {
    return (
        <div className="bullets">
            <WhiteBullet line1="Без визитов" line2="на объект" src={contactIco}/>
            <WhiteBullet line1="100% гарантия фиксированной" line2="сметы" src={rublIco}/>
            <WhiteBullet line1="Все финансовые риски берем" line2="на себя" src={shieledIco}/>
            <WhiteBullet line1="36 готовых" line2="дизайн-проектов" src={lampIco}/>
            <WhiteBullet line1="Все берем на себя" line2="и работаем под ключ" src={flagIco}/>
        </div>
    );
}

export default HomeBullets;