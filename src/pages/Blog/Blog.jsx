import React from 'react';

import ContentFilter from "../../components/Content Filter/ContentFilter.jsx";
import BlogGallery from "../../components/Blog Gallery/BlogGallery.jsx";
import RecommendationForm from "../../components/Recommendation Form/RecommendationForm.jsx";
import SocialMedia from "../../components/Social Media/SocialMedia.jsx";
import CheckButton from "../../components/CheckButton/CheckButton.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";

import "./style.scss";

import pseudoVid from "../Home/static/works/pseudoVid.png";

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
            <div id="blog_interaction">
                <div id="blog_content">
                    <BlogGallery/>
                    <RecommendationForm/>
                </div>
                <CheckButton text="Показать больше"/>
            </div>

            <div id="blog_social_media">
                <SocialMedia/>
            </div>

            <div className="pseudo_vid">
                <img src={pseudoVid} alt="pseudo_video"/>
            </div>

            <div id="blog_faq">
                <FAQ />
            </div>
        </main>
    );
}


export default Blog;