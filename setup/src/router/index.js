import { BrowserRouter } from "react-router-dom";
import URLs from "./urls";
import NavigationHeader from "./navigation";


function App() {
    return (
        <BrowserRouter>
            <NavigationHeader />
            <URLs />
        </BrowserRouter>
    );
}

export default App;
