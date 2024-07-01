import React from 'react';

import "./style.scss";
import feedbacks from "../../../../public/assets/img/feedbacks.png";
import Scroller from "../../shared/Scroller/Scroller.jsx";

function FeedbacksGallery({head_text}) {
    return (
        <div className="feedback_gallery">
            {/*<h1>*/}
                {head_text}
            {/*</h1>*/}
            <img alt="feedbacks" src={feedbacks}/>
            <div id="scroller">
                <Scroller/>
            </div>
        </div>
    );
}

export default FeedbacksGallery;