import { Outlet } from "react-router-dom";

import Navbar from "./NavBar";
import Footer from "./Footer";
import Banner from "./Banner";


export default function MainLayout() {

    return (
        <div className="layout">
            <Navbar />
            <Banner />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}