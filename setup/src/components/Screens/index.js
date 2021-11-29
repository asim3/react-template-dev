import { Routes, Route } from "react-router-dom";
import URLs from '../../Views/URLs'


function filter_routes(data) {
    return Number.isInteger(data.route_order)
}


function sort_routes(first, second) {
    return first.route_order - second.route_order
}

function get_routes(data) {
    return <Route path={data.path} element={data.element} />
}


function Screens() {
    return (
        <Routes>
            {
                URLs
                    .filter(filter_routes)
                    .sort(sort_routes)
                    .map(get_routes)
            }
        </Routes>
    );
}


export default Screens;
