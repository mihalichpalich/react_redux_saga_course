import React, {useState} from 'react';
import {connect} from 'react-redux';

import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

const PostForm = ({createPost, showAlert, alert}) => {
    const [title, setTitle] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        if (!title.trim()) {
            return showAlert('Название поста не может быть пустым')
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
            {alert ? <Alert text={alert}/> : null}

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

const mapStateToProps = state => ({
    alert: state.app.alert
});

const mapDispatchToProps = {
    createPost, showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
