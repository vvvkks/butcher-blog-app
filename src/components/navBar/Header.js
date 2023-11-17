import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <NavLink to="/" className={s.title}>
                    butcher without acid <br/>
                    <span className="blog">blog</span>
                </NavLink>
                <div className={s.links}>
                    <div>
                        <NavLink to="/write" className={s.link}>Create new post</NavLink>
                        <NavLink to="/login" className={s.link}>Login</NavLink>
                        <NavLink to="/register" className={s.link}>Register</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header