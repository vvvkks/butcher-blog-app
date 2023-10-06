import React from "react";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"container"}>
                <div className={"logo"}>
                    <h3>Butcher Without Acid Blog</h3>
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
    )
}

export default Navbar