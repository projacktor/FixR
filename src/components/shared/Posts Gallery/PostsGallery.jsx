import React from 'react';

import CheckButton from "../buttons/CheckButton/CheckButton.jsx";
import Scroller from "../Scroller/Scroller.jsx";

import "./style.scss";

function PostsGallery() {
    return (
        <div className="posts_gallery">
            <h1>Также может быть интересно</h1>
            <div className="content">
                <div className="single_blog_bullet">
                    <div className="blog_bullit_section">
                        <p>Ремонт</p>
                    </div>
                    <a>
                        <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>
                    </a>
                </div>
                <div className="single_blog_bullet">
                    <div className="blog_bullit_section">
                        <p>Строительство</p>
                    </div>
                    <a>
                        <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>
                    </a>
                </div>
                <div className="single_blog_bullet">
                    <div className="blog_bullit_section">
                        <p>Строительство</p>
                    </div>
                    <a>
                        <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>
                    </a>
                </div>
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