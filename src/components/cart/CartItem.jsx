import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart} = useCart();
  return (
    <div className="cart-item">
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-quantity">{item.quantity}</div>
      <div className="cart-item-actions">
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}