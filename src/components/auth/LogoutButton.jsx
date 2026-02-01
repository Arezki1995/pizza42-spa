import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../../context/CartContext";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { clearCart} = useCart();
  return (
    <button
      onClick={
        () => {
          logout({ logoutParams: { returnTo: window.location.origin } });
          clearCart();
        }
      }
      className="logout-btn"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;