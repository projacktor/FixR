import React from 'react';

import Orange_Button from "../../components/helpers/buttons/Orange_Button/Orange_Button.jsx";
import CheckButton from "../../components/helpers/buttons/CheckButton/CheckButton.jsx";
import BlackBtn from "../../components/helpers/buttons/Consulting Black Btn/BlackBtn.jsx";
import PrivacyPolicy from "../../components/helpers/PrivacyPolicy Checkbox/PrivacyPolicy.jsx";
import SeoDiv from "../../components/page chunks/SEO part/seo_div.jsx";

import "./style.scss"

import telegramIcon from "../../assets/svg/telegramIcon.svg";
import whatsappIcon from "../../assets/svg/whatsappIcon.svg";
import youtubeIcon from "../../assets/svg/youtubeIcon.svg";
import vkIcon from "../../assets/svg/vkIcon.svg";
import instaIcon from "../../assets/svg/instaIcon.svg";

function Contacts() {
    return (
        <main className="contacts_page">
            <h1 className="main_header">Контакты FIX-ремонт</h1>
            <div className="map_box">
                <div className="map">
                    <div className="map_make_route">
                        <h2>Адрес <br/> главного <br/> офиса</h2>
                        <p>г. Казань, <br/> ул. Сибирский Тракт 44А</p>
                        <div id="map_route_button_container">
                            <Orange_Button text="Построить маршурт в навигаторе" />
                        </div>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A72d03be55b62e186e1ab7ca478e690eb280706cfaf9597d3ac28019589c3df47&amp;source=constructor"
                       frameBorder="0"></iframe>
                </div>
                <div className="map_contacts">
                    <address id="map_box_contacts_phone">
                        <p>Звоните Пн-Вс: 10:00 - 19:00</p>
                        <a href="tel:+78000000000" target="_blank">8 (800) 000-00-00</a>
                    </address>
                    <address id="map_box_contacts_messengers">
                        <p>Напишите нам, мы онлайн:</p>
                        <div id="map_box_contacts_messengers_container">
                            <a target="_blank" href="">
                                <img alt="telegrsm_icon" src={telegramIcon}/>
                            </a>
                            <a target="_blank" href="">
                                <img alt="whatsap_icon" src={whatsappIcon}/>
                            </a>
                        </div>
                    </address>
                    <address id="map_box_contacts_social">
                        <p>Мы в соц.сетях:</p>
                        <div id="map_box_contacts_social_container">
                            <a target="_blank" href="">
                                <img alt="youtube_icon" src={youtubeIcon}/>
                            </a>
                            <a target="_blank" href="">
                                <img alt="vk_icon" src={vkIcon}/>
                            </a>
                            <a target="_blank" href="">
                                <img alt="instagram_icon" src={instaIcon}/>
                            </a>
                        </div>
                    </address>
                    <div id="map_box_contacts_button_container">
                        <CheckButton text="Реквизиты для юр.лиц"/>
                    </div>
                </div>
            </div>

            <div className="feedback_form">
                <div id="feedback_form_headers">
                    <h1>Форма <br/> обратной <br/> связи</h1>
                    <p>Оставьте нам сообщение, отзыв или <br/> предложение.</p>
                    <p>Ответ пришлём на указанный e-mail.</p>
                    <div id="feedback_form_headers_messengers">
                        <p>Или напишите нам в мессенджер</p>
                        <div>
                            <a target="_blank" href="">
                                <img alt="whatsap_icon" src={whatsappIcon}/>
                            </a>
                            <a target="_blank" href="">
                                <img alt="telegrsm_icon" src={telegramIcon}/>
                            </a>
                        </div>
                    </div>
                </div>

                <form className="send_message_form">
                    <input type="text" placeholder="Сообщение" className="message_input" name="message"/>
                    <input type="tel" placeholder="Ваш номер телефона" className="tel_input" name="telephone" autoComplete="tel"/>
                    <input type="email" placeholder="Ваш e-mail" className="email_input" name="email" autoComplete="email"/>
                    <div id="send_message_form_black_btn_container">
                        <BlackBtn text="Отправить сообщение"/>
                    </div>
                    <div id="send_message_form_privacy_container">
                        <PrivacyPolicy color="#000"/>
                    </div>
                </form>

                <div className="manager_block">
                    <div id="manager_block_die">
                        <h3>Александр <br/> Иванов</h3>
                        <p>Менеджер по продажам <br/> FIX-ремонт</p>
                    </div>
                </div>
            </div>

            <div id="contacts_seo">
                <SeoDiv />
            </div>
        </main>
    );
}

export default Contacts;