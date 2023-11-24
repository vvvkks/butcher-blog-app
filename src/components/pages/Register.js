import React from 'react'
import  s from "./Register.module.css"

const Register = () => {
    return (
        <div className={s.registerForm}>
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Register</button>
            </form>
        </div>
    )
}


export default Register