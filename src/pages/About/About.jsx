import React from 'react';

import WhiteBullet from "../../components/helpers/White bullet/WhiteBullet.jsx";

import "./style.scss";

import src1 from "../../assets/svg/15000.svg"
import src2 from "../../assets/svg/998.svg"
import src3 from "../../assets/svg/10.svg"

function About() {
    return (
        <main className="about_page">
            <h1 className="main_header">О компании FIX-ремонт</h1>
            <div id="white_bullets">
                <WhiteBullet line1="Реализовано" line2="проектов" src={src1}/>
                <WhiteBullet line1="Довольных" line2="клиентов" src={src2}/>
                <WhiteBullet line1="Лет на" line2="рынке РФ" src={src3}/>
            </div>
        </main>
    );
}

export default About;