import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, clearCart, isEmpty} = useCart();

  if(isEmpty){
    return(
      <div>The cart is currently empty. Add items from the menu.</div>
    );
  }
 
  return (
    <div className="card cart-content">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-actions">
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
    </div>
  );
}