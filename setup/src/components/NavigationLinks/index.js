import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import URLs from '../../router/URLs2'



function get_routes_links() {
    return URLs.map(data => <Route path={data.path} element={data.element} />)
}


function NavigationLinks() {
    return { get_routes_links }
}


export default NavigationLinks;
