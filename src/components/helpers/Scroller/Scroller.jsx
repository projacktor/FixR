import React from 'react';

import "./style.scss";

import movingArrow from "../../../assets/svg/moveArrow.svg";
import scroller from "../../../pages/Home/static/icons/scroller.svg";

function Scroller() {
    const moveLeft = () => {
        //     logic
    }
    const moveRight = () => {
        //     logic
    }

    return (
        <div className="gallery_scroller">
            <div className="gallery_arrows">
                <button className="moveLeft" onClick={moveLeft}>
                    <img className="mover leftMover" src={movingArrow}/>
                </button>
                <button className="moveRight" onClick={moveRight}>
                    <img className="mover rightMover" src={movingArrow}/>
                </button>
            </div>
            <div className="gallery_pointer">
                <img src={scroller}/>
            </div>
        </div>
    );
}

export default Scroller;