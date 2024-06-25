import React from 'react';

import "./style.scss";

// Add id="description" to a description element for styling

function BlackBullet({head, description}) {
    return (
        <div className="black_single_bullet" >
            <h5 id="head">{head}</h5>
            {description}
        </div>
    );
}

export default BlackBullet;