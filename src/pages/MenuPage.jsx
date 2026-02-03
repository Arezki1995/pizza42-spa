import { useEffect, useState } from "react";
import { fetchMenu } from "../services/menuApi";
import Menu from "../components/menu/Menu";
import Message from "../components/nav/Message";

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
    </>
  );
}

export default MenuPage;
