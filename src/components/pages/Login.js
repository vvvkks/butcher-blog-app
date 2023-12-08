import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import s from './Login.module.css';

const Login = () => {
    // Состояния для хранения данных формы и ошибок
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    // Обработчик изменения значений в полях ввода
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Очищаем ошибку при изменении значения
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    // Обработчик изменения состояния чекбокса
    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();

        // Валидация почты
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            setErrors({
                ...errors,
                email: 'Invalid email format',
            });
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className={s.login}>
            {/* Заголовок формы */}
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            {/* Форма с использованием MUI компонентов */}
            <form onSubmit={handleSubmit}>
                {/* Поле ввода для электронной почты */}
                <div>
                    <TextField
                        type="text"
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                </div>
                {/* Поле ввода для пароля */}
                <div>
                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                </div>
                {/* Чекбокс "Remember Me" */}
                <div>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="rememberMe" color="primary" checked={formData.rememberMe} onChange={handleCheckboxChange} />}
                            label="Remember Me"
                        />
                    </FormGroup>
                </div>
                {/* Кнопка отправки формы */}
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;