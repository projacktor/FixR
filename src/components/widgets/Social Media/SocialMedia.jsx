import React from 'react';

import "./style.scss";
import videoY from "../../../pages/Home/static/works/videoY.png";
import vkIco from "../../../pages/Home/static/icons/vkIco.svg";
import instagramIco from "../../../pages/Home/static/icons/instagramIco.svg";
import telegramIco from "../../../pages/Home/static/icons/telegramIco.svg";

function SocialMedia() {
    return (
        <div className="social_media">
            <h1>Мы максимально <b>открыты</b> и <br/>
                подтверждаем экспертность в социальных сетях </h1>
            <div id="social_media_block">
                <a href="https://www.youtube.com/c/%D0%9F%D0%95%D0%A0%D0%95%D0%A1%D0%A2%D0%A0%D0%9E%D0%99%D0%9A%D0%90"
                target="_blank">
                    <img className="vid_temp" src={videoY} alt="video"/>
                </a>
                <div className="social_media_enum">
                    <a className="social_media_single social_media1"
                    href="https://vk.com/fix.remoont?from=search"
                    target="_blank">
                        <img src={vkIco}/>
                        <h4>Вконтакте</h4>
                        <p>1 500 подписчиков</p>
                    </a>
                    <a className="social_media_single social_media2"
                    href="https://instagram.com/fix_remont.ru"
                    target="_blank">
                        <img src={instagramIco}/>
                        <h4>Instagram</h4>
                        <p>15 500 подписчиков</p>
                    </a>
                    <a className="social_media_single social_media3"
                    href="https://t.me/FIX_REMONT_bot"
                    target="_blank">
                        <img src={telegramIco}/>
                        <h4>Telegram</h4>
                        <p>500 подписчиков</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;