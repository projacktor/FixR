import React from 'react';

import "./style.scss"
import Orange_Button from "../../components/helpers/Orange_Button/Orange_Button.jsx";

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
                <div className="map_contacts"></div>
            </div>
        </main>
    );
}

export default Contacts;