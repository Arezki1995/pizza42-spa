import Navigation from "../nav/Navigation";
import NavProfile from "./NavProfile";
import LogoBar from "./LogoBar";

export default function Navbar() {

    return (
        <nav className="nav-bar">
            <LogoBar />
            <Navigation />
            <NavProfile />
        </nav>
    );
}