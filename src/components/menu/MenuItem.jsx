import { useMemo } from "react";
import { useCart } from "../../context/CartContext";
import CartItemAction from "../cart/CartItemAction";
import { FaCartPlus } from "react-icons/fa6";

const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MenuItem({ pizza }) {
    const { addToCart, cart } = useCart();

    const quantity = useMemo(() => {
        const cartItem = cart.find(item => item.id === pizza.id);
        return cartItem ? cartItem.quantity : 0;
    }, [cart, pizza.id]);
    

    return (
        <div key={pizza.id} className="card menu-item">
            <div className="menu-item-img">
                <img src={STATIC_IMAGES_BASE_URL + pizza.image_path} alt={pizza.name} />
            </div>
            <div className="menu-item-details">
                <div className="menu-item-name">{pizza.name}  ({pizza.price}€)</div>
                <div className="menu-item-description">{pizza.description}</div>
                <div className="menu-item-action">
                    
                    {quantity > 0 ? (
                        <>
                            <span className="menu-item-count" aria-label={`${quantity} in cart`}>{quantity}</span>
                            <CartItemAction item_id={pizza.id} />
                        </>
                    ):(
                      <button className="btn-add-to-cart" onClick={()=> addToCart(pizza)}><FaCartPlus /></button>  
                    )
                    }
                </div>
            </div>
        </div>
    );

}