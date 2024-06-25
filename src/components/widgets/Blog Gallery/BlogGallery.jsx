import React from 'react';

import BlogBullet from "../../shared/Blog Bullet/BlogBullet.jsx";

import "./style.scss";

function BlogGallery() {
    return (
        <div className="blog_gallery">
            <BlogBullet section="Ремонт" link="post1"
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link="post1"
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link="post1"
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
            <BlogBullet section="Ремонт" link="post1"
                        text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?"/>
        </div>
    );
}

export default BlogGallery;