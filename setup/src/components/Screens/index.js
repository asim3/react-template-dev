import { Routes, Route } from "react-router-dom";
import URLs from '../../Views/URLs'


function get_routes(data) {
    return <Route path={data.path} element={data.element} />
}


function Screens() {
    return (
        <Routes>
            {URLs.map(get_routes)}
        </Routes>
    );
}


export default Screens;
