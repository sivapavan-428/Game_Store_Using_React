import { Routes ,Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";


function AppRoutes(){
    return (
        <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<Navbar />} />
        </Routes>
    );
}

export default AppRoutes;