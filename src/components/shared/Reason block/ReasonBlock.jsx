import React from 'react';

import "./style.scss";

function ReasonBlock({text1, text2, description}) {
    return (
        <div className="reason_block">
            <h2>{text1} <br/> {text2}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ReasonBlock;