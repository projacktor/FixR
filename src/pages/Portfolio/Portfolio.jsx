import React from 'react';

import SeoDiv from "../../components/SEO part/seo_div.jsx";
import Presentation from "../../components/Presentation/Presentation.jsx";

import "./style.scss";

import work1 from "../Home/static/works/work1.png";
import work2 from "../Home/static/works/work2.png";

function Portfolio() {
    return (
        <div className="portfolio_content">
            <div className="main_portfolio">
                <p className="portfolio_headers">Работаем одинаково хорошо, как на крупных объектах, так и в небольших квартирах</p>
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
                        <a><p><u>Узнать стоимость</u></p></a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work1}/>
                        <a><p><u>Узнать стоимость</u></p></a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work2}></img>
                        <a><p><u>Узнать стоимость</u></p></a>
                    </div>
                    <div className="portfolio_variant">
                        <img src={work2}></img>
                        <a><p><u>Узнать стоимость</u></p></a>
                    </div>
                </div>
            </div>

            <div className="portfolio_cosultation">
                <Presentation />
            </div>
            {/*<div className="portfolio_seo">*/}
            {/*    <SeoDiv />*/}
            {/*</div>*/}
        </div>
    );
}

export default Portfolio;