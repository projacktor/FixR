import React from 'react';

import "./style.scss";

function Planner({planner_img,
                     time_text,
                     p1_text,
                     step1_description,
                     step1_time,
                     step2_description,
                     step2_time,
                     step3_description,
                     step3_time,
                     step4_description,
                     p2_text,
                     link_text}) {
    return (
        <div className="planner">
            <div id="planner_right">
                <div className="planner_textbox">
                    <h2>Всего <b>4 шага и {time_text}</b> <br/> личного времени </h2>
                    <p>отделяют вас от {p1_text}</p>
                </div>
                <div className="planner_steps">
                    <div className="planner_single_step" id="planner_step1">
                        <p className="planner_steps_t1">{step1_description}</p>
                        <p className="planner_steps_t2">{step1_time} мин</p>
                    </div>
                    <div className="planner_single_step" id="planner_step2">
                        <p className="planner_steps_t1">{step2_description}</p>
                        <p className="planner_steps_t2">{step2_time} мин</p>
                    </div>
                    <div className="planner_single_step" id="planner_step3">
                        <p className="planner_steps_t1">{step3_description}</p>
                        <p className="planner_steps_t2">{step3_time}</p>
                    </div>
                    <div className="planner_single_step" id="planner_step4">
                        <p className="planner_steps_t1">{step4_description}</p>
                    </div>
                    <div id="link_container">
                        <a>{link_text}</a>
                    </div>

                </div>
            </div>
            <div id="planner_left">
                <img src={planner_img} alt="FIX-remont_planner"/>
                <p>{p2_text}</p>
            </div>
        </div>
    );
}

export default Planner;