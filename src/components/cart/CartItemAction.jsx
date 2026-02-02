import { useCart } from "../../context/CartContext";

export default function CartItemAction({ item_id }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return(
    <div className="cart-item-actions">
        <button className="btn btn-item-actions-increase" onClick={() => increaseQuantity(item_id)}>+</button>
        <button className="btn btn-item-actions-decrease" onClick={() => decreaseQuantity(item_id)}>-</button>
        <button className="btn btn-item-actions-remove" onClick={() => removeFromCart(item_id)}>x</button>
    </div>
  );
}