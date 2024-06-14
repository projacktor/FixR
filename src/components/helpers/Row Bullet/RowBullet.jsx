import React from 'react';

import "./style.scss";

function RowBullet({text}, {id}) {
    return (
        <button className="row_bullet" id={id}>
            <p>{text}</p>
        </button>
    );
}

export default RowBullet;