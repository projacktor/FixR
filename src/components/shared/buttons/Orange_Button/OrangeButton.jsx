import React from 'react';

import styles from "./style.module.scss";

import openLink from "../../../functions/openLink.js";

function OrangeButton({ text, link }) {
    return (
        <button className={styles.button_online_calculator} onClick={openLink(link)}>
            { text }
        </button>
    );
}

export default OrangeButton;