import React from 'react';

import "./style.scss";

function Minibar({desc_name, desc_content}) {
    return (
        <div className="description_minibar">
            <p className="description_name">{desc_name}</p>
            <p className="description_content">{desc_content}</p>
        </div>
    );
}

export default Minibar;