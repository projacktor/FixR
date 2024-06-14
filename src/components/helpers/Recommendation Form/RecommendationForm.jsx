import React from 'react';

import './style.scss';

function RecommendationForm() {
    return (
        <div className="recommendation-form">
            <p className="free-file">Получите бесплатный файл</p>
            <h3><b>ТОП-7 рекомендаций</b> <br/> от наших специалистов<br/> по выбору материалов<br/> для внутренней <br/>отделки вашего жилья</h3>
            <form>
                <label htmlFor="contact-method" id="contact_method">Куда выслать файл?</label>
                <select id="contact-method" className="input-field">
                    <option>Написать в WhatsApp</option>
                    <option>Написать в Telegram</option>
                    <option>Отправить на Email</option>
                </select>
                <input type="tel" placeholder="Ваш номер телефона" className="input-field phone_number_input" />
                <button type="submit" className="submit-button">Записаться на консультацию</button>
                <div className="consent">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">Согласен с условиями <a href="#">Политики конфиденциальности данных</a></label>
                </div>
            </form>
        </div>
    );
}

export default RecommendationForm;
