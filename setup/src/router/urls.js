import { Routes, Route } from "react-router-dom";
import Home from '../screens/home'
import About from '../screens/about'
import User from '../screens/user'
import Login from '../screens/login'




function URLs() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}


export default URLs;
