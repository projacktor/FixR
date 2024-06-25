import React from 'react';

import Minibar from "../../components/widgets/Minibar/Minibar.jsx";
import MinibarVideo from "../../components/widgets/Minibar/MinibarVideo.jsx";
import Die from "../../components/shared/Die/Die.jsx";
import VideoGallery from "../../components/widgets/Video Gallery/VideoGallery.jsx";
import WorksGallery from "../../components/widgets/Works Gallery/WorksGallery.jsx";
import CheckButton from "../../components/shared/buttons/CheckButton/CheckButton.jsx";
import EngConsulting from "../../components/widgets/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/widgets/SEO part/seo_div.jsx";

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
                        <VideoGallery/>
                    </div>
                    <img alt="projectPic2" src={projPic2} className="project_picture"/>
                    <div className="project_textBox">
                        <h2>Задача:</h2>
                        <p id="project_textBox_1">Театр, специализирующийся на разнообразных представлениях, выразил
                            желание усовершенствовать свои технические возможности для привлечения новой аудитории и
                            создания незабываемых визуальных впечатлений. Заказчик искал комплексное решение для
                            обновления мультимедийного оборудования на сцене и в зрительном зале.</p>
                        <h2>Ход работы:</h2>
                        <p id="project_textBox_2">
                            <b>Анализ потребностей и проектирование.</b>
                            <br/>
                            Начали с тщательного анализа потребностей театра и его амбиций.
                            Определили желаемые эффекты, аудиовизуальные элементы, типы представлений и ожидаемую
                            аудиторию.
                            <br/><br/><br/>
                            Составили подробный проект, включающий спецификации оборудования, схемы подключения, расчет
                            освещения и звука, размещение экранов и проекторов. Учли акустические особенности зала и
                            оптимальное размещение технических систем.
                            <br/><br/><br/>
                            <b>Подбор оборудования.</b>
                            <br/>
                            Определение наилучших производителей и моделей оборудования, учитывая баланс между качеством
                            и бюджетом. Выбрали проекторы высокой разрешающей
                            способности, звуковые системы с четким и мощным звучанием, а также подвижные световые
                            приборы для динамичных эффектов.
                            <br/><br/><br/>
                            <b>Производство.</b>
                            <br/>
                            Определение наилучших производителей и моделей оборудования, учитывая баланс между качеством
                            и бюджетом. Выбрали проекторы высокой разрешающей
                            способности, звуковые системы с четким и мощным звучанием, а также подвижные световые
                            приборы для динамичных эффектово.
                            <br/><br/><br/>
                            <b>Тестирование и обучение персонала.</b>
                            <br/>
                            Провели комплексное тестирование оборудования перед открытием для публики. Провели обучение
                            персонала театра по работе с новой техникой, чтобы максимально
                            эффективно использовать ее на представлениях.
                        </p>
                    </div>
                    <div className="project_result">
                        <h2><b>Результат:</b></h2>
                        <img alt="projectPic2" src={projPic2} className="project_picture"/>
                    </div>
                </div>
            </div>
            <div id="project_gallery">
                <h1>Другие реализованные проекты</h1>
                <WorksGallery />
                <CheckButton text="Смотреть все портфолио" link="/portfolio"/>
            </div>
            <div id="project_eng_consulting">
                <EngConsulting />
            </div>
            <div id="project_seo">
                <SeoDiv />
            </div>
        </main>
    );
}

export default Work1;