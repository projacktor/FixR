import React from 'react';

import Orange_Button from "../../components/helpers/buttons/Orange_Button/OrangeButton.jsx";

import "./style.scss";

import cloud from "../../../public/assets/svg/404.svg";

function PageNotFound()
{
    return (
        <main className="notFound">
            <div id="container">
                <h1>Такой страницы не существует!</h1>
                <p>Возможно, страница устарела или была удалена</p>
                <Orange_Button text="Перейти на главную" link="/"/>
            </div>
            <img src={cloud} alt="cloud_picture"/>
        </main>
    );
}

export default PageNotFound;