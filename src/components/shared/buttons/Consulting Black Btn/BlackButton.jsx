import React from 'react';

import "./style.scss"

import openLink from "../../../functions/openLink.js";

function BlackButton({text, link}) {
    return (
        <button className="black_button" onClick={openLink(link)}>
            {text}
        </button>
    );
}

export default BlackButton;