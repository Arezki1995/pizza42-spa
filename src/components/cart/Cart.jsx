import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, clearCart, isEmpty, totalPrice} = useCart();

  if(isEmpty){
    return(
      <div>The cart is currently empty. Add items from the menu.</div>
    );
  }
 
  return (
    <div className="card cart">
      <div className="cart-title">Cart</div>

      <div className="cart-content">
             {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))} 
      </div>

      <div className="cart-summary">
        <span>Total</span>
        <div className="cart-total-price">{totalPrice}€</div>
      </div>
      <div className="cart-actions">
        <button className="btn-cart-clear" onClick={() => clearCart()}>Clear Cart</button>
        <button className="btn-cart-order"> Order</button>  
      </div>
    </div>
  );
}