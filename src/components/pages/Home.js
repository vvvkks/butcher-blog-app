import React from "react";

const Home = () => {
    return (
        <div className={"home"}>
            <section>
                <h2>Обо мне</h2>
                <div className={"posts"}>
                    <article>
                        <h3>Красные флаги в парнях</h3>
                        <p>Если ты не понимаешь, когда стоит попращаться с парнем, чтобы не травмировать свою психику,
                            тогда эта
                            статья точно для тебя! </p>
                    </article>
                </div>
            </section>
            <aside>
                <h2>Мама была права</h2>
                <p>Телефон, <strong>интернет и социальные сети</strong> реально разрушили мою жизнь.</p>
            </aside>
        </div>
    )
}
export default Home