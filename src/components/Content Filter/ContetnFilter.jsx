import React from 'react';

function ContetnFilter({text1, text2, text3}) {
    return (
        <div className="content_filter">
            <button className="filter_sec">
                <p>{text1}</p>
            </button>
            <button className="filter_sec">
                <p>{text2}</p>
            </button>
            <button className="filter_sec">
                <p>{text3}</p>
            </button>
        </div>
    );
}

export default ContetnFilter;