import React from 'react';

import "./style.scss";

function BlogBullet({section, link, text}) {
    return (
        <div className="single_blog_bullit blog_bullit_post">
            <div className="blog_bullit_section">
                <p>{section}</p>
            </div>
            <a href={`/blog/${link}`}>
                <p>{text}</p>
            </a>
        </div>
    );
}

export default BlogBullet;