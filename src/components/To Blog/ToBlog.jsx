import React from 'react';
import CheckButton from "../CheckButton/CheckButton.jsx";

import "./style.scss";

function ToBlog() {
    function openLink(link) {
        return () => {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }

    return (
        <div className="blog">
            <h1>Ведём блог, делимся <b>многолетним опытом</b> и практической<br/> информацией </h1>
            <div className="blog_bullits">
                <div className="single_blog_bullit blog_bullit_post">
                    <div className="blog_bullit_section">
                        <p>Ремонт</p>
                    </div>
                    <a>
                        <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>
                    </a>
                </div>
                <div className="single_blog_bullit blog_bullit_post">
                    <div className="blog_bullit_section">
                        <p>Строительство</p>
                    </div>
                    <a>
                        <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>
                    </a>
                </div>
                <div className="single_blog_bullit blog_bullit_vid">
                </div>
            </div>
            <div className="blog_buttons">
                <CheckButton text="Перейти в блог"/>
                <button className="to_youtube check_button"
                        onClick={openLink("https://www.youtube.com/@director_stroyki")}>
                    Перейти в YouTube
                </button>
            </div>
        </div>
    );
}

export default ToBlog;