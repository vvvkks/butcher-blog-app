import React from "react";

const Header = () => {
    return (
        <header>
            <div className={"navbar"}>
                <div className={"container"}>
                    <div className={"logo"}>
                        <h1>Butcher Without Acid Blog</h1>
                    </div>
                    <div className={"links"}>
                        <nav>
                            <ul>
                                <li><a href="/Login">Login</a></li>
                                <li><a href="/Register">Register</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header