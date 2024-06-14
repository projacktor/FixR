import React from 'react';

import Minibar from "./Minibar.jsx";

import "./style_video.scss"

import videoBtn from "../../../assets/svg/videoBtn.svg";

function MinibarVideo({desc_content}) {
    return (
        <div className="minibar_video">
            <button>
                <img src={videoBtn} alt="video_icon"/>
            </button>
            <Minibar desc_name="Видеообзор" desc_content={desc_content}/>
        </div>
    );
}

export default MinibarVideo;