import { Routes ,Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";


function AppRoutes(){
    return (
        <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<Navbar />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;