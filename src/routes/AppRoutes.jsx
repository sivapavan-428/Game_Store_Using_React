import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import AuthLayout from "../components/AuthLayout";
import ProfileLayout from "../components/ProfileLayout"; // <-- new
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Categories from "../pages/Categories";
import Library from "../pages/Library";
import Cart from "../pages/Cart";
import Profile from "../components/Profile";
import PersonalInfo from "../components/PersonalInfo";
import Address from "../components/Address";
import Orders from "../components/Orders";
import Settings from "../components/Settings";
import Security from "../components/Security";
import Checkout from "../pages/Checkout";
import Bootsdta from "../pages/Bootsdta";
function AppRoutes() {
  return (
    <Routes>
    
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/library" element={<Library />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<ProfileLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal" element={<PersonalInfo />} />
        <Route path="/profile/address" element={<Address />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/security" element={<Security />} />
        <Route path="/bootsdta" element={<Bootsdta />} />
      </Route>
   
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
