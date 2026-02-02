import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchMyOrders } from "../../services/orderApi";
import OrderHistoryItem from "./OrderHistoryItem";

export default function OrdersHistory() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    async function loadOrders() {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            scope: "read:orders",
          },
        });

        const data = await fetchMyOrders(accessToken);
        setOrders(data.orders ?? []);
      } catch (err) {
        console.error(err);
        setError("We couldn’t load your orders right now.");
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) return null;

  return (
    <div className="orders-history">
      <h2>Order History</h2>

      {loading && <p>Fetching your orders…</p>}

      {!loading && error && (
        <p className="error">{error}</p>
      )}

      {!loading && !error && orders.length === 0 && (
        <div className="empty-orders">
          <p>You haven’t placed any orders yet 🍕</p>
          <p>Once you do, they’ll appear here.</p>
        </div>
      )}

      {!loading && !error && orders.length > 0 &&
        orders.map((order) => (
            <OrderHistoryItem key={order.id} ={order}/>
        ))
      }
    </div>
  );
}
