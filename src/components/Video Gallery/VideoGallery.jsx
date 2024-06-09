import React from 'react';

import "./style.scss";

import pseudoVid1 from "../../pages/Home/static/works/videoE.png";
import pseudoVid2 from "../../assets/img/pseudoVideo2.png";

function VideoGallery() {
    return (
        <div className="video_gallery">
            <div className="video1">
                <img src={pseudoVid1} alt="pseudo_vid"/>
            </div>
            <div className="video2">
                <img src={pseudoVid2} alt="pseudo_vid"/>
            </div>
        </div>
    );
}

export default VideoGallery;