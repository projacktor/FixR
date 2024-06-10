import React from 'react';

import ContetnFilter from "../../components/Content Filter/ContetnFilter.jsx";
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
            <div className="blog_articles">
                <p>Делимся полезными идеями и раскрываем секреты ремонта и строительства</p>
                <h1>Полезные статьи</h1>
            </div>
            <div id="blog_content_filter">
                <ContetnFilter buttons={buttons}/>
            </div>


        </main>
    );
}

export default Blog;