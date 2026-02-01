import { useEffect, useState } from "react";
import { fetchMenu } from "../services/menuApi";

const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading menu...</div>;
  if (error) return <div>Error loading menu</div>;

  return (
    <div className="pizza-menu-list">
      {menu.map(pizza => (
        <div key={pizza.id} className="pizza-menu-item">
            <img src={STATIC_IMAGES_BASE_URL+pizza.image_path} alt={pizza.name} style={{width:"100px", height:"100px"}}/>
            <div className="menu-item-name">{pizza.name}</div>
            <div className="menu-item-description">{pizza.description}</div>
            <div className="menu-item-price">{pizza.price}</div>
        </div>
      ))}
    </div>
  );
}

export default MenuPage;