import React, {useState} from 'react';
import {connect} from 'react-redux';

import {createPost} from "../redux/actions";

const PostForm = ({createPost}) => {
    const [title, setTitle] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        if (!title.trim()) {
            return
        }

        const newPost = {
            title,
            id: Date.now().toString()
        };

        createPost(newPost);
        setTitle('')
    };

    const changeInputHandler = e => {
        setTitle(e.target.value)
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    name="title"
                    onChange={changeInputHandler}
                />
            </div>

            <button className="btn btn-success" type="submit">Создать</button>
        </form>
    )
};

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm)
