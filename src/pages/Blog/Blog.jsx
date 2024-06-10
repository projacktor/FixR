import React from 'react';

import ContentFilter from "../../components/Content Filter/ContentFilter.jsx";
import BlogGallery from "../../components/Blog Gallery/BlogGallery.jsx";

import "./style.scss";

function Blog() {
    const buttons = [
        "Все",
        "Ремонт квартир",
        "Строительство домов",
        "Полезное"
    ]
    return (
        <main className="blog_main">
            <div className="blog_headers">
                <p>Делимся полезными идеями и раскрываем секреты ремонта и строительства</p>
                <h1>Полезные статьи</h1>
                <div className="content_filter">
                    <ContentFilter buttons={buttons}/>
                </div>
            </div>
            <div id="blog_content">
                <BlogGallery/>
            </div>
        </main>
    );
}


export default Blog;