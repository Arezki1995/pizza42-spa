
const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import CartItemAction from "./CartItemAction";

export default function CartItem({ item }) {

  return (
    <div className="cart-item">

      <div className="cart-item-img">
        <img src={STATIC_IMAGES_BASE_URL + item.image_path} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>

        <div className="cart-item-quantity">{item.quantity}</div>

        <CartItemAction item_id={item.id}/>
      </div>
    </div>
  );
}