import React from 'react';

import Minibar from "../../components/Minibar/Minibar.jsx";
import MinibarVideo from "../../components/Minibar/MinibarVideo.jsx";
import Die from "../../components/Die/Die.jsx";

import "./style.scss";

import projPic from "./static/projPicture1.png"

function Work1() {
    return (
        <main>
            <div className="portfolio_project">
                <div className="project_desc">
                    <h1>Дом из кирпича 560 м2 на Барвихе </h1>
                    <div className="description_bar">
                        <Minibar desc_name="Сроки" desc_content="15 дней"/>
                        <Minibar desc_name="Стоимость" desc_content="2 500 000 руб"/>
                        <Minibar desc_name="Площадь объекта" desc_content="240 м2"/>
                        <MinibarVideo desc_content="1:25 мин"/>
                    </div>
                    <img src={projPic} alt="Project picture" className="project_picture"/>
                    <div id="die_container_pic">
                        <Die text="СТРОИТЕЛЬСТВО ДОМОВ"/>
                    </div>
                    <div id="proj_video_gallery">

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Work1;