import React from 'react';

import "./style.scss";

import response1 from "../../../pages/Home/static/responses/response1.png";
import videoE from "../../../pages/Home/static/works/videoE.png";
import Scroller from "../../helpers/Scroller/Scroller.jsx";
import CheckButton from "../../helpers/CheckButton/CheckButton.jsx";

function CheckFeedbacks() {
    return (
        <div className="check_feedbacks">
            <div id="check_feedbacks_galleries">
                <div className="response_gallery">
                    <div className="response_gallery_slideshow">
                        <img alt="response_picture" src={response1}/>
                    </div>
                    <div id="responses_gallery_scroller">
                        <Scroller/>
                    </div>
                </div>
                <div className="feedbacks_video_gallery">
                    <div className="video_gallery_slideshow">
                        <img alt="pseudo_vid" src={videoE} id="vid"/>
                    </div>
                    <div id="video_gallery_scroller">
                        <Scroller/>
                    </div>
                </div>
            </div>
            <div id="check_feedbacks_checkbutton_container">
                <CheckButton text="Смотреть все отзывы"/>
            </div>
        </div>
    );
}

export default CheckFeedbacks;