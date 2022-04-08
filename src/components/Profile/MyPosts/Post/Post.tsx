import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i1.sndcdn.com/artworks-000382117347-6dyad7-t500x500.jpg'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post