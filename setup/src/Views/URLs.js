import Home from './Home'
import About from './About'
import User from './User'
import Login from './Login'
import App from './App'


const URLs = [
    { path: "/login", element: <Login />, navigation_order: 1 },
    { path: "/user", element: <User />, navigation_order: 2 },
    { path: "/about", element: <About />, navigation_order: 3 },
    { path: "/app", element: <App />, navigation_order: 4 },
    { path: "/", element: <Home />, navigation_order: 99 },
]


export default URLs;
