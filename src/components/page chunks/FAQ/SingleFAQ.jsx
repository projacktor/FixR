import React from 'react';

import "./style.scss";
import linkImg from "../../../assets/svg/linkImg.svg";

function SingleFaq({text}) {
    return (
        <a className="section_faq_single_bullit">
            <h4>{text}</h4>
            <img src={linkImg} alt="arrow"/>
        </a>
    );
}

export default SingleFaq;