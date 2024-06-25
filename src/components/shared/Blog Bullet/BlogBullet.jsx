import React from 'react';

import "./style.scss";

function BlogBullet({section, link, text}) {
    return (
        <div className="single_blog_bullet blog_bullet_post">
            <div className="blog_bullet_section">
                <p>{section}</p>
            </div>
            <a href={`/blog/${link}`}>
                <p>{text}</p>
            </a>
        </div>
    );
}

export default BlogBullet;