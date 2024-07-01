import React from 'react';

import "./style.scss"

import Scroller from "../../shared/Scroller/Scroller.jsx";

import pic1 from "../../../../public/assets/img/organizationGallery1.png";
import pic2 from "../../../../public/assets/img/organizationGallery2.png";

function OrganizationGallery() {
    return (
        <div className="organization_gallery">
            <h1 className="main_header">Возьмём на себя организацию и выполнение работ под ключ</h1>
            <div id="galleries">
                <div id="left">
                    <img alt="staff_picture" src={pic1}/>
                    <Scroller/>
                </div>

                <div id="right">
                    <img alt="staff_picture" src={pic2}/>
                    <Scroller/>
                </div>
            </div>
        </div>
    );
}

export default OrganizationGallery;