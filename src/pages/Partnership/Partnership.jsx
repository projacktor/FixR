import React from 'react';

import "./style.scss";
import openLink from "../../components/functions/openLink.js";
import OrangeButton from "../../components/shared/buttons/Orange_Button/OrangeButton.jsx";
import HomeBullets from "../../components/widgets/Home Bullets/HomeBullets.jsx";
import Suit from "../../components/widgets/Suit/Suit.jsx";
import Predict from "../../components/widgets/Predict/Predict.jsx";
import linkImg from "../../../public/assets/svg/linkImg.svg";

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
                        <button className="section_renovation section_box" onClick={openLink("/services/renovation")}>
                            <h3 className="renovation_para">Риэлторам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_building section_box" onClick={openLink("/services/building")}>
                            <h3 className="building_para">Застройщикам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_box" id="section_partnership">
                            <h3 className="building_para">Физическим лицам</h3>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                    </div>
                </div>
            </div>

            <HomeBullets/>

            <Suit/>

            <Predict/>
        </main>
    );
}

export default Partnership;