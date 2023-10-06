import React from "react";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <div className={"s.logo"}>
                    <h4>butcher without acid <br/><span className="blog">blog</span></h4>
                </div>
                <div className={s.links}>
                    <nav>
                        <ul>
                            <li><a href="/Write">Create new post</a></li>
                            <li><a href="/Logout">Logout(vvvkks)</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar