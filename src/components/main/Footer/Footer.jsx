import React from 'react';

import Symbol from "../../helpers/Symbol/Symbol.jsx";

import styles from "./style.module.scss";

import footerLogo from "../../../assets/svg/footerLogo.svg";
import WriteUs from "../../helpers/Write us/WriteUs.jsx";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div id={styles.symbol_container}>
                <Symbol header_src={footerLogo} lineColor="rgba(255, 255, 255б 1.25)"/>
            </div>
            <p id={styles.copyright_text}>Copyright 2024. Все права защищены</p>
            <a id={styles.privacy_footer}>Политика конфиденциальности</a>
            <div id={styles.contacts_container}>
                <WriteUs/>
            </div>
        </footer>
    );
}

export default Footer;