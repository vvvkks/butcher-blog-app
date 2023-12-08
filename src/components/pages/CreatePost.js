import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; // Импортируем компонент TextField из библиотеки MUI
import TextareaAutosize from '@mui/material/TextareaAutosize'; // Импортируем компонент TextareaAutosize из библиотеки MUI
import Button from '@mui/material/Button'; // Импортируем компонент Button из библиотеки MUI
import s from './CreatePost.module.css';

function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
    });

    // Обработчик изменения значений в полях ввода
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверка на введенное название перед отправкой формы
        if (!formData.title.trim()) {
            alert('Please enter a text.');
            return;
        }
    };

    return (
        <div className={s.createForm}>
            <h1>New post</h1>
            <form onSubmit={handleSubmit}>
                {/* Поле ввода для заголовка */}
                <TextField
                    type="text"
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                />
                {/* Многострочное поле ввода для текста поста */}
                <TextareaAutosize
                    minRows={3}
                    name="summary"
                    placeholder="Summary"
                    required
                    value={formData.summary}
                    onChange={handleInputChange}
                />
                {/* Поле для загрузки файла */}
                <input type="file" />
                {/* Кнопка создания поста */}
                <Button type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </form>
        </div>
    );
}

export default CreatePost;