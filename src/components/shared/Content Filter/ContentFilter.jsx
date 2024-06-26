import React from 'react';

import "./style.scss";

function ContentFilter({ buttons }) {
    return (
        <div className="content_filter">
            { buttons.map((text, index) => (
                <button key={index} className="filter_sec">
                    <p>{text}</p>
                </button>
            )) }
        </div>
    );
}

export default ContentFilter;