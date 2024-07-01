import React from 'react';

import "./style.scss";

import RenovationHeader from "../../components/widgets/Renovation Header/RenovationHeader.jsx";

import renovationHeaderBackground from "../../../public/assets/img/headBannerPartnershipRealtors.png";

function Realtors() {
    return (
        <main className="partnership_realtors">
            <RenovationHeader image={renovationHeaderBackground}
                              header1="Приводите клиентов на ремонт с фикс ценой и зарабатывайте от 1000 руб/м² с каждой сделки"
                              header2="Обеспечим ваших клиентов сервисом и услугой высшего уровня без рисков для репутации"
                              link_text="Подробнее"/>
        </main>
    );
}

export default Realtors;