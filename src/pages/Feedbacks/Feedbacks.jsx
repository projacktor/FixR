import React from 'react';

import "./style.scss";

import CheckButton from "../../components/CheckButton/CheckButton.jsx";

import feedbacks from "../../assets/img/feedbacks.png";

function Feedbacks() {
    return (
        <main className="feedbacks">
            <div className="headers">
                <p>С 2013 года нам доверились уже более 10 000 клиентов</p>
                <h1>Отзывы наших клиентов </h1>
            </div>
            <div className="feedbacks_content">
                <CheckButton text="Оставить свой отзыв"/>
                <div className="feedbacks_gallery">
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                    <div className="pseudo_vid3"></div>
                </div>
            </div>

            <div className="platforms_responses">
                <h1>Отзывы с независимыз площадок</h1>
                <img alt="feedbacks" src={feedbacks}/>
                <div></div>
            </div>
        </main>
    );
}

export default Feedbacks;