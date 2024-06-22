import React from 'react';

import "./style.scss";
import Sections from "../../components/helpers/Sections/Sections.jsx";

function Services() {
    return (
        <main className="services">
            <h1 className="main_header">Услуги FIX-ремонт</h1>
            <div id="sections">
                <Sections/>
            </div>
        </main>
    );
}

export default Services;