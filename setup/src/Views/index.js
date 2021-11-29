import { BrowserRouter } from "react-router-dom";
import NavigationHeader from "../components/Navigation";
import Screens from "../components/Screens";


function App() {
    return (
        <BrowserRouter>
            <NavigationHeader />
            <Screens />
        </BrowserRouter>
    );
}

export default App;
