import { BrowserRouter } from "react-router-dom";
import NavigationHeader from "./components/Navigation";
import Screens from "./components/Screens";


function App() {
    return (
        <BrowserRouter>
            <NavigationHeader name="Project Name" />
            <Screens />
        </BrowserRouter>
    );
}

export default App;
