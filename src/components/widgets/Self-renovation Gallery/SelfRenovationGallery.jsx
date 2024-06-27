import React from 'react';

import "./style.scss";

import Scroller from "../../shared/Scroller/Scroller.jsx";

import kitchen from "../../../../public/assets/img/kitchen.webp";

function SelfRenovationGallery() {
    return (
        <div className="self-renovation_gallery">
            <div id="head">
                <h1 className="main_header">
                    При самостоятельном ремонте вы
                    <br/>
                    <b>рискуете потратить в два раза больше</b>
                </h1>
                <p>3 примера непредвиденного роста затрат:</p>
            </div>
            <div id="gallery">
                <div id="gallery_content">
                    <div id="left">
                        <h2>Кухня: внеплановые затраты удвоили стоимость ремонта </h2>
                        <ul>
                            <li>Мастера сняли потолок, переделали электрику, наклеили обои и уложили керамогранит на
                                стену
                            </li>
                            <li>При монтаже натяжного потолка рабочие попали в силовой кабель</li>
                            <li>Пришлось снимать керамогранит, отклеивать обои и делать электрику заново</li>
                            <li>Бегом по магазинам за новыми материалами</li>
                            <li>Снова приходится клеить обои, укладывать керамогранит и натягивать потолок</li>
                        </ul>
                        <h2><b>Итог:</b> затраты умножились на 2</h2>
                    </div>
                    <div id="right">
                        <img alt="kitchen_picture" src={kitchen}/>
                    </div>
                </div>
                <Scroller/>
            </div>
        </div>
    );
}

export default SelfRenovationGallery;