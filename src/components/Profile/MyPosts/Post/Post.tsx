import React from "react";
import s from './Post.module.css';

type MessagePropsType = {
    message: string;
    likes: number
}


const Post = (props:MessagePropsType) => {
    return (
        <div className={s.item}>
            <img src='https://i1.sndcdn.com/artworks-000382117347-6dyad7-t500x500.jpg'/>
            {props.message}
            <div>
                <span> like's</span>{props.likes}
            </div>
        </div>
    )
}

export default Post