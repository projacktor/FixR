import React from 'react';

import "./style.scss";

function Die({text}) {
    return (
        <div className="die">
            <p>{text}</p>
        </div>
    );
}

export default Die;