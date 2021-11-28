import { Routes, Route } from "react-router-dom";

import Home from '../screens/Home'
import About from '../screens/About'
import User from '../screens/User'
import Login from '../screens/Login'
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
