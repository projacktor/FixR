import React from 'react';

import "./style.scss";
import linkImg from "../../../assets/svg/linkImg.svg";

function Sections(props) {
    return (
        <div className="sections">
            <button className="section_renovation section_box">
                <p className="sections_name">Ремонт</p>
                <ul className="hidden_text">
                    <li>Квартиры</li>
                    <li>Жилые дома</li>
                    <li>Постройки</li>
                    <li>Мебелировка</li>
                </ul>
                <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
            </button>
            <button className="section_building section_box">
                <p className="sections_name">Строительство</p>
                <ul className="hidden_text">
                    <li>Квартиры</li>
                    <li>Жилые дома</li>
                    <li>Постройки</li>
                    <li>Мебелировка</li>
                </ul>
                <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
            </button>
            <button className="section_box">
                <p className="sections_name">Партнерская программа</p>
                <ul className="hidden_text">
                    <li>Квартиры</li>
                    <li>Жилые дома</li>
                    <li>Постройки</li>
                    <li>Мебелировка</li>
                </ul>
                <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
            </button>
        </div>
    );
}

export default Sections;