import React, {useState, useEffect, useRef, useCallback} from 'react';
import s from './TodoForm.module.css';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input,
            });
            setInput('');
        },
        [input, props.onSubmit]
    );

    return (
        <form onSubmit={handleSubmit} className={s.todoForm}>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className={`${s.todoInput} ${s.edit}`}
                    />
                    <button onClick={handleSubmit} className={`${s.todoButton} ${s.edit}`}>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Add a todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className={s.todoInput}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className={s.todoButton}>
                        Add todo
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
