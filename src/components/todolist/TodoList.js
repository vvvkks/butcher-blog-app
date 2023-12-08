import React, { useCallback, useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import loadingImage from '../../assets/loading.svg';
import s from './TodoList.module.css';
import Api from "./api/Api";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterId, setFilterId] = useState(0);

    const fetchData = useCallback(async () => {
        try {
            const limitedData = await Api.fetchTodos(filterId);
            setTodos(limitedData);
        } catch (error) {
            setError(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }, [filterId]);

    useEffect(() => {
        const pageUpdated = localStorage.getItem('pageUpdated');

        if (pageUpdated) {
            setFilterId(51);
        } else {
            setFilterId(1);

            localStorage.setItem('pageUpdated', 'true');
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData, filterId]);

    const addTodo = useCallback(
        (todo) => {
            if (!todo.title || /^\s*$/.test(todo.title)) {
                return;
            }

            setTodos((prevTodos) => [todo, ...prevTodos]);
        },
        [setTodos]
    );

    const removeTodo = useCallback(
        (id) => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        },
        [setTodos]
    );

    const completeTodo = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, [setTodos]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className={s.todoListContainer}>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            {loading ? (
                <div className={s.loaderContainer}>
                    <img src={loadingImage} alt="Loading" className={s.loaderImage}/>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            )}
        </div>
    );
}

export default TodoList;