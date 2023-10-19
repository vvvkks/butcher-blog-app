import React from "react";
import s from "./Main.module.css"

const Main = () => {
    const tableData = [
        {id: 1, name: "Alex", donation: "8000$"},
        {id: 2, name: "Tom", donation: "5000$"},
        {id: 3, name: "Pavel", donation: "5000$"}
    ]
    return (
        <div className={s.homePage}>
            <div className={s.posts}>
                <div className={s.post}>
                    <div className={s.picture1}>
                        <img src={require("../../assets/post1.png")} alt={"post1 img"}/>
                    </div>
                    <div className={s.content}>
                        <h1 className="post-title">Типы парней</h1>
                        <p className="Post1-description">
                            Я прожила почти 20 лет и за это время очень много общалась с парнями. Сейчас я убедилась,
                            что 99% мальчиков просто одинаковые, у всех есть определённый список проблем, который не
                            меняется от парня к парню.
                            <br/>Для себя я выделила несколько категорий, в которые входят реально все парни....</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className={s.tableContainer}>
                    <table className={s.table}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Donation</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row, index) => (
                            <tr key={row.id} className={index % 2 === 0 ? s.evenRow : s.oddRow}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.donation}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Main