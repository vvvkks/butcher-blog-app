import React from "react";
import s from "./Header.module.css"
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <NavLink to="/" className={s.title}>
                    butcher without acid <br/>
                    <span className="blog">blog</span>
                </NavLink>
                <div className={s.links}>
                    <div>
                        <NavLink to="/todolist" className={`${s.link} ${location.pathname === '/todolist' && s.active}`}>
                            To do list
                        </NavLink>
                        <NavLink to="/create" className={`${s.link} ${location.pathname === '/create' && s.active}`}>
                            Create new post
                        </NavLink>
                        <NavLink to="/login" className={`${s.link} ${location.pathname === '/login' && s.active}`}>
                            Login
                        </NavLink>
                        <NavLink to="/register" className={`${s.link} ${location.pathname === '/register' && s.active}`}>
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
