import React from 'react';

import "./style.scss"

import work1 from "../../pages/Home/static/works/work1.png";
import work2 from "../../pages/Home/static/works/work2.png";
import movingArrow from "../../assets/img/moveArrow.svg";
import scroller from "../../pages/Home/static/icons/scroller.svg";

function WorksGallery() {
    const moveLeft = () => {
        //     logic
    }
    const moveRight = () => {
        //     logic
    }

    return (
        <div className="variants_gallery">
            <div className="variants_gallery_slideshow">
                <div id="variant1">
                    <img src={work1} alt="work1"/>
                    <a><p><u>Узнать стоимость</u></p></a>
                </div>
                <div id="variant2">
                    <img src={work2} alt="work2"></img>
                    <a><p><u>Узнать стоимость</u></p></a>
                </div>
            </div>
            <div className="gallery_scroller">
                <div className="gallery_arrows">
                    <button className="moveLeft" onClick={moveLeft}>
                        <img className="mover leftMover" src={movingArrow} alt="move arrow"/>
                    </button>
                    <button className="moveRight" onClick={moveRight}>
                        <img className="mover rightMover" src={movingArrow} alt="move arrow"/>
                    </button>
                </div>
                <div className="gallery_pointer">
                    <img src={scroller} alt="scroller"/>
                </div>
            </div>
        </div>
    );
}

export default WorksGallery;