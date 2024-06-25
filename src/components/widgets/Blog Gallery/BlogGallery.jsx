import React from 'react';

import BlogBullet from "../../shared/Blog Bullet/BlogBullet.jsx";

import "./style.scss";

function BlogGallery() {
    let param = "calculator-guide";
    return (
        <div className="blog_gallery">
            <BlogBullet section="Ремонт" link={param}
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link={param}
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link={param}
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link={param}
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
        </div>
    );
}

export default BlogGallery;