import React from 'react';

import contactIco from "../../../pages/Home/static/icons/contactIcon.svg";

function WhiteBullet({line1, line2, src}) {
    return (
        <div className="single_bullet">
            <p className="bullet1_para"> {line1} <br/> {line2}</p>
            <img alt="bullet_img" className="contact_img" src={src}/>
        </div>
    );
}

export default WhiteBullet;