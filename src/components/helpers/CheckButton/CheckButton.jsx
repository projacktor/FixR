import React from 'react';

import "./style.scss";

function CheckButton({text}) {
    return (
        <button className="check_button">
            {text}
        </button>
    );
}

export default CheckButton;