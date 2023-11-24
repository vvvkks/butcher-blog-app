import React from "react";
import s from "./CreatePost.module.css";

function CreatePost() {
    return (
        <div className={s.createForm}>
            <h1>New post</h1>
            <form action="">
                <input type="text" placeholder="Title" />
                <textarea placeholder="Summary" />
                <input type="file" />
                <button>Create</button>
            </form>
        </div>
    );
}

export default CreatePost;