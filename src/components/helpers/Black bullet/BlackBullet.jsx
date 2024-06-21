import React from 'react';

import "./style.scss";

function BlackBullet({head, description}) {
    return (
        <div className="black_single_bullet" >
            <h5 id="head">{head}</h5>
            {description}
            {/*<p id="description">{description}</p>*/}
        </div>
    );
}

export default BlackBullet;