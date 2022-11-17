// components
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

function App() {
    return (
        <>
            <ToastContainer />
            <Home />
        </>
    );
}

export default App;
