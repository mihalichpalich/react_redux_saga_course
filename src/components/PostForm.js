import React, {useState} from 'react';

export default () => {
    const [title, setTitle] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        const newPost = {
            title,
            id: Date.now().toString()
        };

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

