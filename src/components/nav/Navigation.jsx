import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navigation() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navigation">
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>

      {isAuthenticated ? (
        <>
          <Link to="/profile">Profile</Link>
        </>
      ) : null}
    </div>
  );
}