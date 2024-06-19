import React from 'react';

import Symbol from "../../helpers/Symbol/Symbol.jsx";

import styles from "./style.module.scss";

import footerLogo from "../../../assets/svg/footerLogo.svg";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div id={styles.symbol_container}>
                <Symbol header_src={footerLogo} lineColor="rgba(255, 255, 255, 0.5)"/>
            </div>
        </footer>
    );
}

export default Footer;