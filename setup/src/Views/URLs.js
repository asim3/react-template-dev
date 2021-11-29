import Home from './Home'
import About from './About'
import User from './User'
import Login from './Login'
import App from './App'


const URLs = [
    { name: "Login", path: "/login", element: <Login />, route_order: 1, navbar_order: 3 },
    { name: "User", path: "/user", element: <User />, route_order: 2, navbar_order: 4 },
    { name: "About", path: "/about", element: <About />, route_order: 3, navbar_order: 2 },
    { name: "App", path: "/app", element: <App />, route_order: 4, navbar_order: 1 },
    { name: "Home", path: "/", element: <Home />, route_order: 99, navbar_order: 0 },
]


export default URLs;
