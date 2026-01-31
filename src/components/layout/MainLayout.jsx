import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <div className="layout">
            <Navbar/>
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}