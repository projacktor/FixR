import React from 'react';

import ContentFilter from "../../components/helpers/Content Filter/ContentFilter.jsx";
import BlogGallery from "../../components/page chunks/Blog Gallery/BlogGallery.jsx";
import RecommendationForm from "../../components/helpers/Recommendation Form/RecommendationForm.jsx";
import SocialMedia from "../../components/page chunks/Social Media/SocialMedia.jsx";
import CheckButton from "../../components/helpers/buttons/CheckButton/CheckButton.jsx";
import EngConsulting from "../../components/page chunks/Eng Consulting/EngConsulting.jsx";
import FAQ from "../../components/page chunks/FAQ/FAQ.jsx";
import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";

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
                <div className="blog_content_filter">
                    <ContentFilter buttons={buttons}/>
                </div>
            </div>
            <div id="blog_interaction">
                <div id="blog_content">
                    <BlogGallery/>
                    <RecommendationForm/>
                </div>
                <CheckButton text="Показать больше" link="/blog"/>
            </div>

            <div id="blog_social_media">
                <SocialMedia/>
            </div>

            <div className="pseudo_vid">
                <img src={pseudoVid} alt="pseudo_video"/>
            </div>

            <div id="blog_faq">
                <FAQ/>
            </div>

            <div id="blog_eng_consulting">
                <EngConsulting/>
            </div>

            <div id="blog_seoo">
                <SeoDiv/>
            </div>
        </main>
    );
}


export default Blog;