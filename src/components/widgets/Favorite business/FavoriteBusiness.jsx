import React, {useState} from 'react';

import "./style.scss";

import OrangeButton from "../../shared/buttons/Orange_Button/OrangeButton.jsx";

import solution1 from "../../../pages/Home/static/icons/solution1.png";
import solution2 from "../../../pages/Home/static/icons/solution2.png";
import solution3 from "../../../pages/Home/static/icons/solution3.png";
import solution4 from "../../../pages/Home/static/icons/solution4.png";
import movingArrow from "../../../../public/assets/svg/moveArrow.svg";
import sofaImg from "../../../../public/assets/img/sofaPhotoHome.png";

function FavoriteBusiness() {
    const [currentImg, setCurrentImg] = useState(sofaImg);

    const moveLeft = () => {
        //     logic
    }
    const moveRight = () => {
        //     logic
    }
    return (
        <div className="favorite_business">
            <div id="left">
                <h1 className="mega_box2_tagline">Занимайтесь <br/> <b>любимыми</b> делами, <br/> а
                    ремонт мы <br/> возьмём на себя.
                </h1>
                <div className="solutions">
                    <p className="solutions_sections">4 пакетных решения. <b><u>Выбирайте</u></b> для себя лучшее:
                    </p>
                    <div className="solutions_gallery">
                        <div className="row_gallery">
                            <button className="solutions_button">
                                <img alt="solution_background" src={solution1}/>
                            </button>
                            <button className="solutions_button">
                                <img alt="solution_background" src={solution2}/>
                            </button>
                            <button className="solutions_button">
                                <img alt="solution_background" src={solution3}/>
                            </button>
                            <button className="solutions_button">
                                <img alt="solution_background" src={solution4}/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div id="right">
                <div className="home_gallery">
                    <img alt="worl_picture" className="sofa_img" src={currentImg}/>
                    <div className="move_bar">
                        <button className="moveLeft" onClick={moveLeft}>
                            <img className="mover leftMover" src={movingArrow}/>
                        </button>
                        <button className="moveRight" onClick={moveRight}>
                            <img className="mover rightMover" src={movingArrow}/>
                        </button>
                    </div>
                </div>

                <div className="solutions_description">
                    <div className="solutions_description_text">
                        <h2 className="solution_tag">Комфорт</h2>
                        <p className="solution_tag_description">Для ценителей дорогого <br/> минималистичного стиля
                        </p>
                    </div>

                    <div className="solution_cost_fix">
                        <p className="solution_tag_description">Стоимость:</p>
                        <h2 className="solution_tag">Фикс</h2>
                        <OrangeButton text={"Онлайн-калькулятор"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteBusiness;