import React from 'react';

import "./style.scss";

import Scroller from "../../shared/Scroller/Scroller.jsx";

import feedback from "../../../../public/assets/img/renovationFeedback.webp"

function SelfRenovation() {
    return (
        <div className="self-renovation">
            <h1 className="main_header">О чём с <b>грустью рассказывают</b> те,
                <br/> кто делал ремонт самостоятельно?</h1>
            <p>сотни подобных историй от наших клиентов со всей страны мы слышим регулярно</p>
            <div id="gallery">
                <div id="gallery_content">
                    <img alt="feedback" src={feedback}/>
                    <img alt="feedback" src={feedback}/>
                    <img alt="feedback" src={feedback}/>
                </div>
                <Scroller/>
            </div>
            
        </div>
    );
}

export default SelfRenovation;