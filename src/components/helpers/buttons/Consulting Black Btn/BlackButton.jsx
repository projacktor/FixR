import React from 'react';

import "./style.scss"

import openLink from "../../../functions/openLink.js";

function BlackButton({text, link}) {
    return (
        <button className="to_consulting_btn" onClick={openLink(link)}>
            {text}
        </button>
    );
}

export default BlackButton;