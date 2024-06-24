import React from 'react';

import CheckButton from "../../helpers/buttons/CheckButton/CheckButton.jsx";

import openLink from "../../functions/openLink.js";

import "./style.scss";
import BlogBullet from "../../helpers/Blog Bullet/BlogBullet.jsx";

function ToBlog() {
    return (
        <div className="blog">
            <h1>Ведём блог, делимся <b>многолетним опытом</b> <br/> и практической информацией </h1>
            <div className="blog_bullits">
                <BlogBullet section="Ремонт" link="post1" text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
                <BlogBullet section="Строительство" link="post1" text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
                <div className="single_blog_bullit blog_bullit_vid">
                </div>
            </div>
            <div className="blog_buttons">
                <CheckButton text="Перейти в блог" link="/blog"/>
                <button className="to_youtube check_button"
                        onClick={openLink("https://www.youtube.com/@director_stroyki")}>
                    Перейти в YouTube
                </button>
            </div>
        </div>
    );
}

export default ToBlog;