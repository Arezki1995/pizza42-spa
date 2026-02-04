import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderApi";
import { FaRocket } from "react-icons/fa6";

export default function OrderPage() {
  
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const { cart, clearCart, totalPrice } = useCart();

  async function handleSubmitOrder() {
    if (!isAuthenticated) {
      alert("You must be logged in to order");
      return;
    }

    if (!user.email_verified){
      alert("You need to verify your email to place an order!");
      return; 
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
          scope: "create:orders",
        }
      });

      const orderPayload = {
        items: cart.map(item => ({
          pizza_id: item.id,
          quantity: item.quantity,
        })),
      };

      await createOrder(orderPayload, accessToken);

      clearCart();
      alert("Order placed successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  }

  return (
    <div className="card order-confirmation">
      <div className="order-confirmation-title">Confirm Order</div>
      <div className="order-confirmation-text">Do you confirm the pizza order?</div>
      <div className="cart-summary">
        <div className="cart-total-price">{totalPrice}€</div>
      </div>
      <button className="btn-confirm-order" onClick={handleSubmitOrder}>
        <FaRocket /> Confirm Order
      </button>
    </div>
  );
}