import React from 'react';
import responsibilityBullits from "../../assets/img/responsibilityBullits.png";
import ceoPhoto from "../../pages/Home/static/works/ceoPhoto.png";

import "./style.scss";

function Responsibility() {
    return (
        <div className="responsibility">
            <h1>Лично <b>несу</b><br/><b>ответственность</b><br/>
                за качество<br/> предоставляемых услуг </h1>
            <p className="responsibility_para">За 10 лет мы выполнили более 1 000 объектов и не получили</p>
            <p className="responsibility_para">ни одной жалобы на качество работы и обслуживания</p>
            <img className="responsibility_bullits" src={responsibilityBullits}/>
            <img className="responsibility_human" src={ceoPhoto}/>
        </div>
    );
}

export default Responsibility;