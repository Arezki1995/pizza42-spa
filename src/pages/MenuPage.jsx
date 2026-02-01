import { useEffect, useState } from "react";
import { fetchMenu } from "../services/menuApi";
import Menu from "../components/menu/Menu";

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
    <Menu menu={menu} />
  );
}

export default MenuPage;