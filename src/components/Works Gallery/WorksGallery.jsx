import React from 'react';

import "./style.scss"

import Scroller from "../Scroller/Scroller.jsx";

import work1 from "../../pages/Home/static/works/work1.png";
import work2 from "../../pages/Home/static/works/work2.png";

function WorksGallery() {

    return (
        <div className="variants_gallery">
            <div className="variants_gallery_slideshow">
                <div id="variant1">
                    <img src={work1} alt="work1"/>
                    <a><p><u>Узнать стоимость</u></p></a>
                </div>
                <div id="variant2">
                    <img src={work2} alt="work2"></img>
                    <a><p><u>Узнать стоимость</u></p></a>
                </div>
            </div>
            <div id="scroller_WG">
                <Scroller/>
            </div>
        </div>
    );
}

export default WorksGallery;