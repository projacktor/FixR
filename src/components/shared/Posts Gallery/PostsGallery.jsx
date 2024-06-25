import React from 'react';

import CheckButton from "../buttons/CheckButton/CheckButton.jsx";
import Scroller from "../Scroller/Scroller.jsx";
import BlogBullet from "../Blog Bullet/BlogBullet.jsx";

import "./style.scss";

function PostsGallery() {
    const param = "calculator-guide";
    return (
        <div className="posts_gallery">
            <h1>Также может быть интересно</h1>
            <div className="content">
                <BlogBullet section="Ремонт" link={param}
                            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
                <BlogBullet section="Ремонт" link={param}
                            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
                <BlogBullet section="Ремонт" link={param}
                            text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            </div>
            <div id="scroller_container">
                <Scroller/>
            </div>
            <div className="blog_buttons">
                <CheckButton text="Читать другие статьи" link="/blog"/>
            </div>
        </div>
    );
}

export default PostsGallery;