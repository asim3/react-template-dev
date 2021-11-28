import { Routes, Route } from "react-router-dom";

import Home from '../screens/home'
import About from '../screens/about'
import User from '../screens/user'
import Login from '../screens/login'
import App from '../screens/App'


function URLs() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/app" element={<App />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}


export default URLs;
