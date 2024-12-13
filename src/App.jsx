import { Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </div>
    );
}

export default App;
