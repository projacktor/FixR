import React from 'react';

import RecommendationForm from "../../components/helpers/Recommendation Form/RecommendationForm.jsx";

import "./style.scss";

import blog1_main from "../../../public/assets/img/blog1_calculator.png"
import blog1_2 from "../../../public/assets/img/blog2_calculator.png"
import CheckButton from "../../components/helpers/buttons/CheckButton/CheckButton.jsx";
import PostsGallery from "../../components/helpers/Posts Gallery/PostsGallery.jsx";
import EngConsulting from "../../components/page chunks/Eng Consulting/EngConsulting.jsx";
import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";

function Post1() {
    return (
        <main id="blog_post_1">
            <div className="post">
                <div className="post_content">
                    <h1>Как рассчитать стоимость <br/> через калькулятор FIX-ремонт?</h1>
                    <img alt="calculator_picture" src={blog1_main} id="first_picture"/>
                    <p>В мире современных бизнес-коммуникаций, успешные встречи и конференции играют важную роль. Все
                        чаще мы видим, как виртуальные пространства объединяют людей из разных уголков мира, позволяя им
                        общаться и сотрудничать, не покидая своих рабочих мест. Конференц-залы стали незаменимой частью
                        этой эволюции, и их аудио-визуальные системы играют ключевую роль в обеспечении комфорта и
                        эффективности современных деловых встреч.</p>
                    <div id="post_content_gallery_1">
                        <img alt="gallery_photo_1" src={blog1_2}/>
                        <img alt="gallery_photo_2" src={blog1_2}/>
                    </div>
                    <p>
                        <b style={{color: '#000'}}>Качество: каждая деталь важна</b>
                        <br/><br/>
                        Одним из главных требований к аудио-визуальным системам для конференц-залов является высокое
                        качество звука и изображения. Важно, чтобы каждый участник мог четко слышать и видеть всех
                        других, будь они в одной комнате или на расстоянии метров.
                        <br/><br/>
                        Для обеспечения качественного звука используются передовые акустические системы и микрофоны с
                        шумоподавлением. Важно учесть акустические особенности конференц-зала, чтобы избежать эффекта
                        эха или потери звука.
                        <br/><br/>
                        Качественное изображение достигается благодаря современным проекторам и дисплеям с высоким
                        разрешением. Это особенно важно при проведении видеоконференций и презентаций, где каждая деталь
                        имеет значение.
                    </p>
                    <div id="post_content_gallery_2">
                        <img alt="gallery_photo_1" src={blog1_2}/>
                        <img alt="gallery_photo_2" src={blog1_2}/>
                        <img alt="gallery_photo_2" src={blog1_2}/>
                    </div>
                    <p>
                        <b style={{color: '#000'}}>Комфорт: создайте условия для успешных встреч</b>
                        <br/><br/>
                        Комфорт участников встречи - это ещё один аспект, на который следует обратить внимание при
                        выборе аудио-визуальных систем для конференц-залов. Удобные кресла, хорошая освещенность и
                        климат-контроль помогают создать оптимальные условия для работы.
                        <br/><br/>
                        Кроме того, комфорт включает в себя возможность быстро и легко подключить свои устройства к
                        системе, будь то ноутбук, смартфон или планшет. Важно, чтобы ничто не мешало процессу обмена
                        информацией и идеями.
                    </p>
                    <div id="post_content_button_container">
                        <CheckButton text="Вернуться в блог" link={"/blog"}/>
                    </div>
                </div>
                <div id="post_recommendation_form_wrapper">
                    <RecommendationForm/>
                </div>
            </div>

            <div id="blog_posts_container">
                <PostsGallery/>
            </div>

            <div id="eng_consulting_container">
                <EngConsulting/>
            </div>

            <div id="seo_container">
                <SeoDiv/>
            </div>
        </main>
    );
}

export default Post1;