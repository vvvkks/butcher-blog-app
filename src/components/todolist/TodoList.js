import React, {useCallback, useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import s from './TodoList.module.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(
        (todo) => {
            if (!todo.text || /^\s*$/.test(todo.text)) {
                return;
            }

            setTodos((prevTodos) => [todo, ...prevTodos]);
        },
        [setTodos]
    );

    const updateTodo = useCallback(
        (todoId, newValue) => {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
                return;
            }

            setTodos((prevTodos) =>
                prevTodos.map((item) => (item.id === todoId ? newValue : item))
            );
        },
        [setTodos]
    );

    const removeTodo = useCallback(
        (id) => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        },
        [setTodos]
    );

    const completeTodo = useCallback(
        (id) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) => {
                    if (todo.id === id) {
                        todo.isComplete = !todo.isComplete;
                    }
                    return todo;
                })
            );
        },
        [setTodos]
    );

    return (
        <div className={s.todoListContainer}>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;

