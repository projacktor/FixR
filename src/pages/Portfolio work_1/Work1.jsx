import React from 'react';

import Minibar from "../../components/Minibar/Minibar.jsx";
import MinibarVideo from "../../components/Minibar/MinibarVideo.jsx";
import Die from "../../components/Die/Die.jsx";
import VideoGallery from "../../components/Video Gallery/VideoGallery.jsx";

import "./style.scss";

import projPic1 from "./static/projPicture1.png"
import projPic2 from "./static/projPicture2.png"

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
                    <img src={projPic1} alt="Project picture" className="project_picture"/>
                    <div id="die_container_pic">
                        <Die text="СТРОИТЕЛЬСТВО ДОМОВ"/>
                    </div>
                    <div id="proj_video_gallery">
                        <VideoGallery />
                    </div>
                    <img alt="projectPic2" src={projPic2} className="project_picture"/>
                    <div className="project_textBox">
                        <h2>Задача:</h2>
                        <p>Театр, специализирующийся на разнообразных представлениях, выразил желание усовершенствовать свои технические возможности для привлечения новой аудитории и
                            создания незабываемых визуальных впечатлений. Заказчик искал комплексное решение для обновления мультимедийного оборудования на сцене и в зрительном зале.</p>
                        <h2>Ход работы:</h2>
                        <p><b>Анализ потребностей и проектирование.</b></p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Work1;