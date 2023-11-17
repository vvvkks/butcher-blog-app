import Header from "./components/navBar/Header";
import Main from "./components/pages/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/main' element={<Main/>} />
                <Route exact path='/'
                       element={<Navigate to={"/main"}/>} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;