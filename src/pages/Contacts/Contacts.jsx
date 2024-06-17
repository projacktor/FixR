import React from 'react';

import Orange_Button from "../../components/helpers/Orange_Button/Orange_Button.jsx";

import telegramIcon from "../../assets/svg/telegramIcon.svg";
import whatsappIcon from "../../assets/svg/whatsappIcon.svg";
import youtubeIcon from "../../assets/svg/youtubeIcon.svg";
import vkIcon from "../../assets/svg/vkIcon.svg";
import instaIcon from "../../assets/svg/instaIcon.svg";


import "./style.scss"
import CheckButton from "../../components/helpers/CheckButton/CheckButton.jsx";
import BlackBtn from "../../components/helpers/Consulting Black Btn/BlackBtn.jsx";
import PrivacyPolicy from "../../components/helpers/PrivacyPolicy Checkbox/PrivacyPolicy.jsx";

function Contacts() {
    return (
        <main className="contacts_page">
            <h1 className="head">Контакты FIX-ремонт</h1>
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
                    <input type="text" placeholder="Сообщение" className="message_input"/>
                    <input type="tel" placeholder="Ваш номер телефона" className="tel_input"/>
                    <input type="email" placeholder="Ваш e-mail" className="email_input"/>
                    <div id="send_message_form_black_btn_container">
                        <BlackBtn text="Отправить сообщение"/>
                    </div>
                    <div id="send_message_form_privacy_container">
                        <PrivacyPolicy />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contacts;