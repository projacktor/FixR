import React from 'react';

import "./style.scss"

import groupPhoto from "../../../pages/Home/static/works/groupPhoto.png";
import CheckButton from "../../helpers/buttons/CheckButton/CheckButton.jsx";

function Presentation() {
    return (
        <div className="presentation">
            <h1>Над вашим объектом будет работать команда <b>настоящих фанатов</b> своего дела </h1>
            <img src={groupPhoto}/>
            <CheckButton text="Оставить заявку на консультацию от специалиста" link="/contacts"/>
        </div>
    );
}

export default Presentation;