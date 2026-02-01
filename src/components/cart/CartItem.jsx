import { useCart } from "../../context/CartContext";
const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="cart-item">

      <div className="cart-item-img">
        <img src={STATIC_IMAGES_BASE_URL + item.image_path} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>

        <div className="cart-item-quantity">{item.quantity}</div>
        <div className="cart-item-actions">
          <button className="btn btn-item-actions-increase" onClick={() => increaseQuantity(item.id)}>+</button>
          <button className="btn btn-item-actions-decrease" onClick={() => decreaseQuantity(item.id)}>-</button>
          <button className="btn btn-item-actions-remove" onClick={() => removeFromCart(item.id)}>x</button>
        </div>
      </div>

    </div>
  );
}