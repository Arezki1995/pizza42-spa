import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProfilePage from "../pages/ProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MenuPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}