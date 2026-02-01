import Navigation from "../nav/Navigation";
import NavProfile from "./NavProfile";

export default function Navbar() {

    return (
        <nav className="nav-bar">
            <Navigation />
            <NavProfile />
        </nav>
    );
}