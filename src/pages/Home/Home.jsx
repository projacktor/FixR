// TODO: replace some imgs to bullits
// TODO: replace social media by component

import React, {useState} from 'react';

import OrangeButton from "../../components/helpers/Orange_Button/Orange_Button.jsx";
import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";
import Responsibility from "../../components/page chunks/Responsibility/Responsibility.jsx";
import Presentation from "../../components/page chunks/Presentation/Presentation.jsx";

import "./style.scss";

import "../../assets/img/megaBoxBackground.png";
import linkImg from "../../assets/svg/linkImg.svg";
import contactIco from "./static/icons/contactIcon.svg";
import rublIco from "./static/icons/rublIcon.svg";
import shieledIco from "./static/icons/shiledIcon.svg";
import lampIco from "./static/icons/lampIcon.svg";
import flagIco from "./static/icons/flagIcon.svg";
import sofaImg from "../../assets/img/sofaPhotoHome.png";
import movingArrow from "../../assets/svg/moveArrow.svg";
import solution1 from "./static/icons/solution1.png";
import solution2 from "./static/icons/solution2.png";
import solution3 from "./static/icons/solution3.png";
import solution4 from "./static/icons/solution4.png";
import creditImg from "../../assets/img/creditImg.png";
import creditCardImg from "../../assets/img/creditCardImg.png";
import materialsImg from "../../assets/img/creditCardMaterials.png";
import creditBullets from "../../assets/img/creditBullets.png";
import responseYandex from "../../assets/img/responseYandex.png";
import responseOtzovik from "../../assets/img/responseOtzovik.png";
import work1 from "./static/works/work1.png";
import work2 from "./static/works/work2.png";
import scroller from "./static/icons/scroller.svg";
import response1 from "./static/responses/response1.png";
import videoE from "./static/works/videoE.png";
import videoY from "./static/works/videoY.png";
import plannerImg1 from "./static/works/plannerImg1.png";
import vkIco from "./static/icons/vkIco.svg";
import instagramIco from "./static/icons/instagramIco.svg";
import telegramIco from "./static/icons/telegramIco.svg";
import pseudoVid from "./static/works/pseudoVid.png";
import whatsappIco from "../../assets/svg/whatsappIcon.svg";
import Risk from "../../components/page chunks/Risk/Risk.jsx";
import WorksGallery from "../../components/page chunks/Works Gallery/WorksGallery.jsx";
import CheckFeedbacks from "../../components/page chunks/Check Feedbacks/CheckFeedbacks.jsx";
import SocialMedia from "../../components/page chunks/Social Media/SocialMedia.jsx";
import ToBlog from "../../components/page chunks/To Blog/ToBlog.jsx";


function Home() {
    const [currentImg, setCurrentImg] = useState(sofaImg);

    const moveLeft = () => {
        //     logic
    }
    const moveRight = () => {
        //     logic
    }

    function openLink(link) {
        return () => {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    }

    return (
        <main className="home_content">

            <div className="intro_container">
                <div className="mega_box">
                    <p className="mega_box_tagline">Первый в России<br/>
                        онлайн-сервис<br/>
                        по ремонту и строительству<br/>
                        с фиксированной стоимостью</p>
                </div>

                <div id="right_part">
                    <div className="work_station">
                        <p className="work_station_tagline">Воплотим вашу<br/>
                            мечту в реальность<br/> без визитов на<br/> объект</p>
                        <div className="buttons">
                            <OrangeButton text={"Онлайн-калькулятор"}/>
                            <button className="button_partnership">
                                Стать партнером
                            </button>
                        </div>
                    </div>
                    <div className="sections">
                        <button className="section_renovation section_box">
                            <p className="renovation_para">Ремонт</p>
                            <p className="hidden_text">Без визитов на объект. <br/>
                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_building section_box">
                            <p className="building_para">Строительство</p>
                            <p className="hidden_text">Без визитов на объект. <br/>

                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                        <button className="section_box" id="section_partnership">
                            <p className="building_para">Партнерская программа</p>
                            <p className="hidden_text">Без визитов на объект. <br/>
                                Заезжайте на готовую <br/> квартиру уже через <br/> 6-8 месяцев</p>
                            <img className="linkImg revertImg" src={linkImg} alt="section_background"/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="bullets">
                <div className="bullet1 single_bullet">
                    <p className="bullet1_para">Без визитов <br/> на объект</p>
                    <img alt="bullet_img" className="contact_img" src={contactIco}/>
                </div>
                <div className="bullet2 single_bullet">
                    <p className="bullet2_para">100% гарантия фиксированной <br/> сметы</p>
                    <img alt="bullet_img" className="rubl_img" src={rublIco}/>
                </div>
                <div className="bullet3 single_bullet">
                    <p className="bullet3_para">Все финансовые риски берем <br/> на себя</p>
                    <img alt="bullet_img" className="shield_img" src={shieledIco}/>
                </div>
                <div className="bullet4 single_bullet">
                    <p className="bullet4_para">36 готовых <br/> дизайн-проектов</p>
                    <img alt="bullet_img" className="lamp_img" src={lampIco}/>
                </div>
                <div className="bullet5 single_bullet">
                    <p className="bullet5_para">Все берем на себя <br/> и работаем под ключ</p>
                    <img alt="bullet_img" className="flag_img" src={flagIco}/>
                </div>
            </div>

            <div className="mega_box2">
                <div id="mega_box2_left">
                    <h1 className="mega_box2_tagline">Занимайтесь <br/> <b>любимыми</b> делами, <br/> а
                        ремонт мы <br/> возьмём на себя.
                    </h1>
                    <div className="solutions">
                        <p className="solutions_sections">4 пакетных решения. <b><u>Выбирайте</u></b> для себя лучшее:
                        </p>
                        <div className="solutions_gallery">
                            <div className="row_gallery">
                                <button className="solutions_button">
                                    <img alt="solution_background" src={solution1}/>
                                </button>
                                <button className="solutions_button">
                                    <img alt="solution_background" src={solution2}/>
                                </button>
                                <button className="solutions_button">
                                    <img alt="solution_background" src={solution3}/>
                                </button>
                                <button className="solutions_button">
                                    <img alt="solution_background" src={solution4}/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="mega_box2_right">
                    <div className="home_gallery">
                        <img alt="worl_picture" className="sofa_img" src={currentImg}/>
                        <div className="move_bar">
                            <button className="moveLeft" onClick={moveLeft}>
                                <img className="mover leftMover" src={movingArrow}/>
                            </button>
                            <button className="moveRight" onClick={moveRight}>
                                <img className="mover rightMover" src={movingArrow}/>
                            </button>
                        </div>
                    </div>

                    <div className="solutions_description">
                        <div className="solutions_description_text">
                            <h2 className="solution_tag">Комфорт</h2>
                            <p className="solution_tag_description">Для ценителей дорогого <br/> минималистичного стиля
                            </p>
                        </div>

                        <div className="solution_cost_fix">
                            <p className="solution_tag_description">Стоимость:</p>
                            <h2 className="solution_tag">Фикс</h2>
                            <OrangeButton text={"Онлайн-калькулятор"}/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="credit">
                <a href="node-releases">
                    <img alt="credit" src={creditImg}/>
                </a>
            </div>

            <div id="home_risk">
                <Risk/>
            </div>
            <div id="home_works_gallery">
                <div className="response_header">
                    <div id="response_names">
                        <p>Но лучше всего о нас расскажут</p>
                        <h1>Выполненные работы <br/> и отзывы клиентов </h1>
                    </div>
                    <div id="response_bullets">
                        <a className="response_bullet" target="_blank">
                            <img alt="yandex_picture" src={responseYandex}/>
                            <p><u>Смотреть отзывы на Яндекс</u></p>
                        </a>
                        <a className="response_bullet response_bullet2" target="_blank">
                            <img alt="otzovik_picture" src={responseOtzovik}/>
                            <p><u>Смотреть отзывы на Отзовик</u></p>
                        </a>
                    </div>
                </div>
                <WorksGallery/>
            </div>

            <div id="home_check_feedbacks">
                <CheckFeedbacks/>
            </div>

            <div className="planner">
                <div id="planner_right">
                    <div className="planner_textbox">
                        <h2>Всего <b>4 шага и 1.5 часа</b> <br/> личного времени </h2>
                        <p>отделяют вас от дома своей мечты</p>
                    </div>
                    <div className="planner_steps">
                        <div className="planner_single_step" id="planner_step1">
                            <p className="planner_steps_t1">Выбор опции</p>
                            <p className="planner_steps_t2">1 мин</p>
                        </div>
                        <div className="planner_single_step" id="planner_step2">
                            <p className="planner_steps_t1">Выбор подходящего тарифа</p>
                            <p className="planner_steps_t2">30 мин</p>
                        </div>
                        <div className="planner_single_step" id="planner_step3">
                            <p className="planner_steps_t1">Удобный выбор
                                планировки и материала</p>
                            <p className="planner_steps_t2">60 мин</p>
                        </div>
                        <div className="planner_single_step" id="planner_step4">
                            <p className="planner_steps_t1">Проведение работ сервисом FIX-ремонт</p>
                        </div>
                        <div className="planner_single_step" id="planner_step5">
                            <p className="planner_steps_t1">Получите — распишитесь!:)</p>
                        </div>
                    </div>
                </div>
                <div id="planner_left">
                    <img src={plannerImg1} alt="FIX-remont_planner"/>
                    <p>Выбирайте подходящий тариф под ваш бюджет.
                        Цена фиксированная!</p>
                </div>
            </div>

            <div id="home_presentation">
                <Presentation />
            </div>

            <div id="home_responsibility">
                <Responsibility/>
            </div>

            <div id="home_social_media">
                <SocialMedia/>
            </div>

            <div className="pseudo_vid">
                <img alt="pseudo_video" src={pseudoVid}/>
            </div>

            <div id="home_to_blog">
                <ToBlog/>
            </div>

            {/*<div className="blog">*/}
            {/*    <h1>Ведём блог, делимся <b>многолетним опытом</b> и практической<br/> информацией </h1>*/}
            {/*    <div className="blog_bullits">*/}
            {/*        <div className="single_blog_bullit blog_bullit_post">*/}
            {/*            <div className="blog_bullit_section">*/}
            {/*                <p>Ремонт</p>*/}
            {/*            </div>*/}
            {/*            <a>*/}
            {/*                <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="single_blog_bullit blog_bullit_post">*/}
            {/*            <div className="blog_bullit_section">*/}
            {/*                <p>Строительство</p>*/}
            {/*            </div>*/}
            {/*            <a>*/}
            {/*                <p>Как рассчитать стоимость через <br/> онлайн-калькулятор FIX-ремонт?</p>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="single_blog_bullit blog_bullit_vid"></div>*/}
            {/*    </div>*/}
            {/*    <div className="blog_buttons">*/}
            {/*        <button className="to_blog check_button">*/}
            {/*            Перейти в блог*/}
            {/*        </button>*/}
            {/*        <button className="to_youtube check_button"*/}
            {/*                onClick={openLink("https://www.youtube.com/@director_stroyki")}>*/}
            {/*            Перейти в YouTube*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="section_faq">*/}
            {/*    <div className="section_faq_head">*/}
            {/*        <h1>Отвечаем на <b>самые частые<br/> вопросы</b> наших клиентов </h1>*/}
            {/*        <div className="section_faq_CEO">*/}
            {/*            <h4>Фанис Хасанов</h4>*/}
            {/*            <p>Основатель и руководитель FIX-ремонт <br/><br/>*/}
            {/*                Не нашли свой вопрос? Свяжитесь с нами!</p>*/}
            {/*            <div className="section_faq_contacts">*/}
            {/*                <a href="tel:8 (800) 000-00-00"><h4>8 (800) 000-00-00</h4></a>*/}
            {/*                <a>*/}
            {/*                    <img className="section_faq_whatsapp" src={whatsappIco}/>*/}
            {/*                </a>*/}
            {/*                <a>*/}
            {/*                    <img className="section_faq_telegram" src={telegramIco}/>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="section_faq_box">*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*        <a className="section_faq_single_bullit">*/}
            {/*            <h4>Какой срок службы?</h4>*/}
            {/*            <img src={linkImg}/>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="home_seo">*/}
            {/*    <SeoDiv/>*/}
            {/*</div>*/}
        </main>
    );
}

export default Home;
