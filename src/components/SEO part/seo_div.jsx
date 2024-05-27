import React, { useState } from 'react';
import "./style.scss";

function SeoDiv() {
    const [isOpen, setIsOpen] = useState(true); // Изначальное состояние - открыто

    const toggleOpen = () => {
        setIsOpen(!isOpen); // Переключение состояния
    };

    return (
        <div className="seo_part">
            <div className={`seo_content ${isOpen ? 'open' : 'closed'}`}>
                <h1>Текст, который важен для SEO</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    amet. <br/> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <ul>
                    <li>do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    </li>
                    <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</li>
                    <li>do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.
                    </li>
                </ul>
                <h3>Заголовок H3</h3>
                <h4>Заголовок H4</h4>
                <h5>Заголовок H5</h5>
                <h6>Заголовок H6</h6>
            </div>
            <button onClick={toggleOpen} className="toggle_button_seo">
                {isOpen ? 'Закрыть' : 'Раскрыть полностью'}
            </button>
        </div>
    );
}

export default SeoDiv;
