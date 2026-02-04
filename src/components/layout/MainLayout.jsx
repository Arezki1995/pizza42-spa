import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./NavBar";
import Footer from "./Footer";



export default function MainLayout() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div className="layout">
            <Navbar />
            {
             (isAuthenticated && !user.email_verified) ?
                (
                <div className="email-verification-banner">
                    An email is sent to mailbox to finalize your account setup.
                    A verified email <b>is required</b> in order to place an Order.
                </div>
                ) : null

            }

            <main className="container">

                <Outlet />
            </main>
            <Footer />
        </div>
    );
}