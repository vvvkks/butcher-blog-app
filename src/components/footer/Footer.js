import React, { useEffect, useState } from "react";
import s from "./Footer.module.css";

const Footer = () => {
    const [loadTime, setLoadTime] = useState(0);

    useEffect(() => {
        const startTime = window.performance.timing.navigationStart;
        const loadTime = Date.now() - startTime;
        setLoadTime(loadTime);
    }, []);

    return (
        <footer className={s.footer}>
            <span>You can be my sponsor! Feel free to reach out on Telegram: <a href="https://t.me/nevaleft">@nevaleft</a></span>
            <div className={s.someText}>
                <p>Thanks for visiting! Don't forget to bring your money.</p>
                <p>Page load time: {loadTime} milliseconds</p>
            </div>
        </footer>
    );
};

export default Footer;

