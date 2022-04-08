import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
        </div>
        <div>
            New Post
        </div>
        <div className={s.posts}>
            <Post/>
        </div>
    </div>
}

export default MyPosts