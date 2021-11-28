import { BrowserRouter } from "react-router-dom";
import URLs from "./urls";
import NavigationHeader from "../components/Navigation";


function App() {
    return (
        <BrowserRouter>
            <NavigationHeader />
            <URLs />
        </BrowserRouter>
    );
}

export default App;
