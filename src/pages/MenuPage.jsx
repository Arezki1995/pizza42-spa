import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { fetchMenu } from "../services/menuApi";
import Menu from "../components/menu/Menu";
import Message from "../components/nav/Message";

function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isEmpty, totalItems } = useCart();

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <Message 
        title="Info"
        text="Loading menu..."
    ></Message>
  );
  
  if (error) return (
      <Message
        title="Error"
        text="Error loading menu"
      ></Message>
  );

  return (
    <>
      <div className="card menu-title">Menu</div>
      <Menu menu={menu} />  
      {!isEmpty && (
        <Link to="/cart" className="cart-shortcut" > Go to Cart<span className="cart-shortcut-count">{totalItems}</span>
        </Link>
      )}
    </>
  );
}

export default MenuPage;
