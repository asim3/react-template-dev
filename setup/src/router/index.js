import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}


function Links() {
    return (
        <div>
            <br />
            <br />
            <a href="/">home</a> <br />
            <a href="/login">login</a> <br />
            <a href="/user">user</a> <br />
            <a href="/about">about</a> <br />
        </div>
    );
}


function Home() {
    return <h2>Home <Links /></h2>;
}


function About() {
    return <h2>About <Links /></h2>;
}


function User() {
    return <h2>User <Links /></h2>;
}


function Login() {
    return <h2>Login <Links /></h2>;
}


export default App;
