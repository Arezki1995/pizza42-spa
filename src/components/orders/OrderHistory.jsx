import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OrderHistoryItem from "./OrderHistoryItem";

const ORDER_HISTORY_CLAIM = "http://pizza42.com/order_history";

export default function OrdersHistory() {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    async function loadOrdersFromToken() {
      try {
        const claims = await getIdTokenClaims();
        const orderHistory = claims?.[ORDER_HISTORY_CLAIM];

        setOrders(orderHistory ?? []);
      } catch (err) {
        console.error(err);
        setError("We couldn’t load your order history.");
      } finally {
        setLoading(false);
      }
    }

    loadOrdersFromToken();
  }, [isAuthenticated, getIdTokenClaims]);

  if (!isAuthenticated) return null;

  return (
    <div className="card orders-history">
      <div className="orders-history-title">Order History</div>
      <div className="orders-history-subtitle">(Based on Auth0 ID token custom claim)</div>

      {loading && <p>Loading your order history…</p>}

      {!loading && error && <p className="error">{error}</p>}

      {!loading && !error && orders.length === 0 && (
        <div className="card empty-orders">
          <p>You haven’t placed any orders yet</p>
          <p>Once you do, they’ll appear here at your next login.</p>
        </div>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className="orders-history-list">
          <div className="order-card">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Timestamp</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderHistoryItem key={order.id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
