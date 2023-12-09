import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import s from './Todo.module.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    return todos.map((todo, index) => (
        <div className={todo.completed ? `${s.todoRow} ${s.complete}` : s.todoRow} key={index}>
            <div>
                {todo.title}
            </div>
            <div className={s.icons}>
                <button onClick={() => completeTodo(todo.id)} className={s.completeButton}>
                    <FaCheckCircle />
                </button>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className={s.deleteIcon} />
            </div>
        </div>
    ));
};

export default Todo;