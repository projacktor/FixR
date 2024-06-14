import React from 'react';

import styles from "./style.module.scss";

function OrangeButton({ text }) {
    return (
        <button className={styles.button_online_calculator}>
            { text }
        </button>
    );
}

export default OrangeButton;