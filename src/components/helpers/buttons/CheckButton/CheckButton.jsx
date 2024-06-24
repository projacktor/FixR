import React from 'react';

import openLink from "../../../functions/openLink.js";

import "./style.scss";

function CheckButton({text, link}) {

    return (
        <button className="check_button" onClick={openLink(link)}>
            {text}
        </button>
    );
}

export default CheckButton;