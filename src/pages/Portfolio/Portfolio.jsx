// TODO: Replace @portfolio_content_filter with the component

import React from 'react';

import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";
import Presentation from "../../components/page chunks/Presentation/Presentation.jsx";
import EngConsulting from "../../components/page chunks/Eng Consulting/EngConsulting.jsx";
import Responsibility from "../../components/page chunks/Responsibility/Responsibility.jsx";

import "./style.scss";
import work1 from "../Home/static/works/work1.png";
import work2 from "../Home/static/works/work2.png";
import CheckButton from "../../components/helpers/CheckButton/CheckButton.jsx";

function Portfolio() {
    return (
        <main className="portfolio_content">
            <div className="main_portfolio">
                <p className="portfolio_headers">Работаем одинаково хорошо, как на крупных объектах, так и в небольших
                    квартирах</p>
                <h1 className="portfolio_headers">Посмотрите на наши <b>выполненные проекты</b></h1>
                <div className="portfolio_content_filter">
                    <button className="portfolio_section portfolio_section1">
                        <p>Все</p>
                    </button>
                    <button className="portfolio_section portfolio_section2">
                        <p>Ремонт квартир</p>
                    </button>
                    <button className="portfolio_section portfolio_section3">
                        <p>Строительство дома</p>
                    </button>
                </div>
                <div className="portfolio_gallery">
                    <div className="portfolio_variant">
                        <img src={work1}/>
                        <a href="/FixR/portfolio/work1">
                            <p><u>Узнать стоимость</u></p>
                        </a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work1}/>
                        <a href="/FixR/portfolio/work1">
                            <p><u>Узнать стоимость</u></p>
                        </a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work2}></img>
                        <a href="/FixR/portfolio/work1">
                            <p><u>Узнать стоимость</u></p>
                        </a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work2}></img>
                        <a href="/FixR/portfolio/work1">
                            <p><u>Узнать стоимость</u></p>
                        </a>
                    </div>
                </div>
                <CheckButton text="Показать больше" link="/portfolio/work1"/>
            </div>

            <div className="portfolio_consulting">
                <Presentation/>
            </div>

            <div className="portfolio_responsibility">
                <Responsibility />
            </div>

            <div className="portfolio_engConsulting">
                <EngConsulting />
            </div>
            <div className="portfolio_seo">
                <SeoDiv />
            </div>
        </main>
    );
}

export default Portfolio;