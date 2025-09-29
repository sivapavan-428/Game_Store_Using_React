import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import AuthLayout from "../components/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Categories from "../pages/Categories";
import Library from "../pages/Library";
import Cart from "../pages/Cart";

function AppRoutes() {
  return (
    <Routes>
      {/* Pages with Navbar + Toptool */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/library" element={<Library />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
