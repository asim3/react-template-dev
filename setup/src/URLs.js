import Home from './Views/Home'
import About from './Views/About'
import User from './Views/User'
import Login from './Views/Login'
import App from './Views/App'


const URLs = [
    { name: "Login", path: "/login", element: <Login />, route_order: 1, navbar_order: 3 },
    { name: "User", path: "/user", element: <User />, route_order: 2, navbar_order: 4 },
    { name: "About", path: "/about", element: <About />, route_order: 3, navbar_order: 2 },
    { name: "App", path: "/app", element: <App />, route_order: 4, navbar_order: 1 },
    { name: "Home", path: "/", element: <Home />, route_order: 99, navbar_order: 0 },
]


export default URLs;
