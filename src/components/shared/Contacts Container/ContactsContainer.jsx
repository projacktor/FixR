import React from 'react';

import "./style.scss";
import clockIcon from "../../../../public/assets/svg/headerClockIcon.svg";
import phoneIcon from "../../../../public/assets/svg/headerPhone.svg";

function ContactsContainer() {
    return (
        <div className="contacts_container">
            <div className="worktime_container">
                <img alt="clock_icon" className="clock" src={clockIcon}/>
                <p className="worktime">Звоните Пн-Вс: 8:30 - 19:00</p>
            </div>
            <div className="contacts_header_line line3"></div>
            <address className="phone_container">
                <img alt="phone_icon" className="phone" src={phoneIcon}/>
                <a target="_blank" className="phone_number" href="tel:+7 (966) 250-77-99"><p className="phone_number">+7
                    (966) 250-77-99</p></a>
            </address>
        </div>
    );
}

export default ContactsContainer;