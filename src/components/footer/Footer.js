import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <span>You can be my sponsor! Feel free to reach out on Telegram: <a href="https://t.me/kkkvvs">@kkkvvs</a></span>
            <div className={s.someText}>
                <p>Thanks for visiting! Don't forget to bring your money.</p>
            </div>
        </footer>
    );
};

export default Footer;
