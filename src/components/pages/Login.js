import React from 'react'
import s from "./Login.module.css"

const Login = () => {
    return (
        <div className={s.login}>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login