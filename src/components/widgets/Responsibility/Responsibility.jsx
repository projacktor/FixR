import React from 'react';
import "./style.scss";

import responsibilityBullits from "../../../../public/assets/img/responsibilityBullits.png";
import ceoPhoto from "../../../pages/Home/static/works/ceoPhoto.png";

function Responsibility() {
    return (
        <div className="responsibility">
            <div id="responsibility_left">
                <h1>Лично <b>несу</b><br/><b>ответственность</b><br/>
                    за качество<br/> предоставляемых услуг </h1>
                <p className="responsibility_para">За 10 лет мы выполнили более 1 000 объектов и не получили <br/>
                </p>ни одной жалобы на качество работы и обслуживания
                <img alt="responsibility bullits" className="responsibility_bullits" src={responsibilityBullits}/>
            </div>
            <div id="responsibility_right">
                <img alt="CEO_picture" className="responsibility_human" src={ceoPhoto}/>
            </div>
        </div>
    );
}

export default Responsibility;