import { Link } from "react-router-dom";
export default function Navigation() {

    return (
            <div className="navigation">
                <Link to="/menu">Menu</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/order">Order</Link>
            </div>
    );
}