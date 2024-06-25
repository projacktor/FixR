import React from 'react';

import WriteUs from "../../shared/Write us/WriteUs.jsx";
import ContactsContainer from "../../shared/Contacts Container/ContactsContainer.jsx";
import Symbol from "../../shared/Symbol/Symbol.jsx";

import styles from "./style.module.scss";

import footerLogo from "../../../../public/assets/svg/footerLogo.svg";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div id={styles.symbol_container}>
                <Symbol header_src={footerLogo} lineColor="rgba(255, 255, 255, 1.25)"/>
            </div>
            <p id={styles.copyright_text}>Copyright 2024. Все права защищены</p>
            <a id={styles.privacy_footer}>Политика конфиденциальности</a>
            <div id={styles.write_us_container}>
                <WriteUs/>
            </div>
            <div id={styles.contacts_container}>
                <ContactsContainer/>
            </div>
        </footer>
    );
}

export default Footer;