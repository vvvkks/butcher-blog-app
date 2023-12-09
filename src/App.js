import Header from "./components/navBar/Header";
import Main from "./components/pages/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import CreatePost from "./components/pages/CreatePost";
import TodoList from "./components/todolist/TodoList";
import MainBoard from "./kittens/comp/mainBoard/MainBoard";
import {Provider} from "react-redux";
import {store} from "./kittens/redux/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/main" element={<Main />} />
                    <Route exact path="/" element={<Navigate to="/main" />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/create" element={<CreatePost />} />
                    <Route exact path="/todolist" element={<TodoList />} />
                    <Route exact path="/kitty" element={<MainBoard />} />
                </Routes>
                <Footer />
            </div>
        </Provider>
    );
}
export default App;