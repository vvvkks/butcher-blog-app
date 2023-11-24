import React from "react";
import s from "./Main.module.css"

const Main = () => {
    return (
        <div className={s.homePage}>
            <div className={s.posts}>
                <div className={s.post}>
                    <div className={s.picture1}>
                        <img src={require("../../assets/post1.png")} alt={"post1 img"}/>
                    </div>
                    <div className={s.content}>
                        <h1 className="post-title">Типы парней</h1>
                        <p className={s.info}>
                            <a href="#/" className={s.author}>vvvkks</a>
                            <time>2023-11-15 18:14</time>
                        </p>
                        <p className="Post1-description">
                            Я прожила почти 20 лет и за это время очень много общалась с парнями. Сейчас я убедилась,
                            что 99% мальчиков просто одинаковые, у всех есть определённый список проблем, который не
                            меняется от парня к парню.
                            <br/>Для себя я выделила несколько категорий, в которые входят реально все парни....</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main