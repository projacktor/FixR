import React from 'react';

import "./style.scss"

import groupPhoto from "../../../pages/Home/static/works/groupPhoto.png";

function Presentation() {
    return (
        <div className="presentation">
            <h1>Над вашим объектом будет работать команда <b>настоящих фанатов</b> своего дела </h1>
            <img src={groupPhoto}/>
            <button className="get_consulting check_button">
                Оставить заявку на консультацию от специалиста
            </button>
        </div>
    );
}

export default Presentation;