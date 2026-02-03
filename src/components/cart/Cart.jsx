import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Message from "../nav/Message";

export default function Cart() {
  const { cart, clearCart, isEmpty, totalPrice} = useCart();

  if(isEmpty){
    return(
      <Message
        title="Info"
        text="The cart is currently empty. Add items from the menu."
      >
      <Link to="/menu">Return to Menu</Link>
      </Message>

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
        <span>Total:</span>
        <div className="cart-total-price">{totalPrice}€</div>
      </div>
      <div className="cart-actions">
        <button className="btn-cart-clear" onClick={() => clearCart()}>Clear Cart</button>
        <Link className="btn-cart-order" to="/order">Order</Link>
      </div>
    </div>
  );
}